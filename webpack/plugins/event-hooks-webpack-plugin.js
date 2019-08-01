module.exports = (entry) => {
  const EventHooksWebpackPlugin = require('event-hooks-webpack-plugin')
  const fastGlob = require('fast-glob')
  const fsExtra = require('fs-extra')
  const path = require('path')

  return new EventHooksWebpackPlugin({
    beforeCompile: {
      tap: 'tapPromise',
      task: async () => {
        const buildArtifactPaths = await fastGlob('*', {
          cwd: path.resolve(entry.root, entry.output),
          absolute: true,
          onlyFiles: false,
          dot: true,
          followSymbolicLinks: false
        })

        for (const buildArtifactPath of buildArtifactPaths) {
          await fsExtra.remove(buildArtifactPath)
        }
      }
    },
    afterEmit: {
      tap: 'tapPromise',
      task: async () => {
        if (entry.mode == 'production' && entry.modules) {
          const buildArtifactNames = await fastGlob('**', {
            cwd: path.resolve(entry.root, entry.output, entry.input),
            dot: true,
            followSymbolicLinks: false
          })

          for (const buildArtifactName of buildArtifactNames) {
            await fsExtra.move(
              path.resolve(entry.root, entry.output, entry.input, buildArtifactName),
              path.resolve(entry.root, entry.output, buildArtifactName),
              { overwrite: true }
            )
          }

          await fsExtra.remove(path.resolve(entry.root, entry.output, entry.input))
        }
      }
    }
  })
}

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
          cwd: path.resolve(entry.root, 'builds'),
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
            cwd: path.resolve(entry.root, 'builds', 'codes'),
            dot: true,
            followSymbolicLinks: false
          })

          for (const buildArtifactName of buildArtifactNames) {
            await fsExtra.move(
              path.resolve(entry.root, 'builds', 'codes', buildArtifactName),
              path.resolve(entry.root, 'builds', buildArtifactName),
              { overwrite: true }
            )
          }

          await fsExtra.remove(path.resolve(entry.root, 'builds/codes'))
        }
      }
    }
  })
}

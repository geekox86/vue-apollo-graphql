module.exports = async (entry) => {
  const fastGlob = require('fast-glob')
  const fsExtra = require('fs-extra')
  const path = require('path')

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

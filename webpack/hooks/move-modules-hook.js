module.exports = async (entry) => {
  if (entry.mode == 'production' && entry.modules) {
    const fastGlob = require('fast-glob')
    const fsExtra = require('fs-extra')
    const path = require('path')

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

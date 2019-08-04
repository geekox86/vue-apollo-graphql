module.exports = (entry) => {
  if (entry.mode == 'production' && entry.minifyFa) {
    const FontAwesomeMinifyPlugin = require('font-awesome-minify-plugin')
    const path = require('path')

    return new FontAwesomeMinifyPlugin({
      srcDir: path.resolve(entry.root, entry.input),
      // globPattern: '**/*.vue'
    })
  }
}

module.exports = (entry) => {
  if (entry.mode == 'production' && entry.modules) {
    return {
      loader: 'emit-file-loader',
      options: {
        context: entry.root,
        output: '[path][name].js'
      }
    }
  }
}

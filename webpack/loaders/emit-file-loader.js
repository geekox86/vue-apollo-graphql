module.exports = (entry) => {
  if (entry.mode == 'production' && entry.modules) {
    const hash = (entry.mode == 'production' && entry.hash) ? '.[contenthash:8]' : ''

    return {
      loader: 'emit-file-loader',
      options: {
        context: entry.root,
        output: `[path][name]${ hash }.js`
      }
    }
  }
}

module.exports = (_, importLoaders) => {
  return {
    loader: 'css-loader',
    options: {
      importLoaders: importLoaders,
      sourceMap: true
    }
  }
}

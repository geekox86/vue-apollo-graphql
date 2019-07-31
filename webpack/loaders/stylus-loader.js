module.exports = () => {
  return {
    loader: 'stylus-loader',
    options: {
      preferPathResolver: 'webpack',
      sourceMap: true
    }
  }
}

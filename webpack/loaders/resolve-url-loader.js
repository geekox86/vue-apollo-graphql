module.exports = () => {
  return {
    loader: 'resolve-url-loader',
    options: {
      keepQuery: true,
      sourceMap: true
    }
  }
}

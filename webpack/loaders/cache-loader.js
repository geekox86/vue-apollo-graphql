module.exports = () => {
  return {
    loader: 'cache-loader',
    options: { cacheDirectory: '.cache' }
  }
}

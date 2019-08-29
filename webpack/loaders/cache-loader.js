module.exports = (entry) => {
  if (entry.cache) {
    return {
      loader: 'cache-loader',
      options: { cacheDirectory: '.cache' }
    }
  }
}

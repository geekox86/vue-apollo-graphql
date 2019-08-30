module.exports = (entry) => {
  if (entry.mode == 'production') {
    return {
      minimize: entry.minify,
      runtimeChunk: { name: 'bootstrap' },
      splitChunks: {
        name: false,
        chunks: 'all',
        minChunks: 1,
        minSize: 0,
        maxSize: Infinity,
        maxInitialRequests: Infinity, // todo: fix when maxInitialRequests equals 1
        maxAsyncRequests: Infinity,
        cacheGroups: {
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /node_modules/,
            priority: 1
          },
          common: {
            name: 'common',
            chunks: 'all',
            minChunks: 2,
            reuseExistingChunk: false,
            priority: 2
          },
          default: false
        }
      }
    }
  }
}

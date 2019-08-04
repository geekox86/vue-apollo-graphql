module.exports = (entry) => {
  if (entry.vue) {
    const cacheLoader = require('../loaders/cache-loader')
    const vueLoader = require('../loaders/vue-loader')

    return {
      test: /\.vue$/,
      use: [
        cacheLoader(entry),
        vueLoader(entry)
      ].filter((loader) => loader)
    }
  }
}

module.exports = (entry) => {
  if (entry.vue) {
    const vueLoader = require('../loaders/vue-loader')

    return {
      test: /\.vue$/,
      loader: vueLoader(entry)
    }
  }
}

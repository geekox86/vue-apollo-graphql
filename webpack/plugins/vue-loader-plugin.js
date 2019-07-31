module.exports = (entry) => {
  if (entry.vue) {
    const VueLoaderPlugin = require('vue-loader/lib/plugin')

    return new VueLoaderPlugin()
  }
}

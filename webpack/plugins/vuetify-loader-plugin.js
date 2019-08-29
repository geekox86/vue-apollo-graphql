module.exports = (entry) => {
  if (entry.vue && entry.vuetify) {
    const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

    return new VuetifyLoaderPlugin()
  }
}

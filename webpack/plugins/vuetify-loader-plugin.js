module.exports = (entry) => {
  if (entry.vuetify) {
    const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

    return new VuetifyLoaderPlugin()
  }
}

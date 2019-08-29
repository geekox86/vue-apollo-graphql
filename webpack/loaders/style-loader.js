module.exports = (entry) => {
  if ((entry.mode == 'development' || !entry.extractCss) && !entry.vue) {
    return 'style-loader'
  }
}

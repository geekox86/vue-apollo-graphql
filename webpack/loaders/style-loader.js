module.exports = (entry) => {
  if (entry.mode == 'development' && !entry.vue) {
    return 'style-loader'
  }
}

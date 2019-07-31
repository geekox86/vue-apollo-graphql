module.exports = (entry) => {
  if (entry.mode == 'development' && entry.vue) {
    return 'vue-style-loader'
  }
}

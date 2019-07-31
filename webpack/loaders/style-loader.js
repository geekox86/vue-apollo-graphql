module.exports = (entry) => {
  if (entry.mode == 'development' && !entry.vue) {
    return {
      loader: 'style-loader',
      options: { sourceMap: true }
    }
  }
}

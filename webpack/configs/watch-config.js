module.exports = (entry) => {
  if (entry.mode == 'development' && entry.dev) {
    return true
  }
}

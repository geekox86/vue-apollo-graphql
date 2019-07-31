module.exports = (entry) => {
  if (!entry.modules) {
    return entry.mode == 'development' ? 'eval-source-map' : 'source-map'
  }
}

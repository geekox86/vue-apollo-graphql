module.exports = (entry) => {
  if (entry.mode == 'production') {
    return { splitChunks: { chunks: 'all' } }
  }
}

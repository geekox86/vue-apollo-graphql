module.exports = (entry) => {
  const exts = ['.js', '.json']

  if (entry.typescript) {
    exts.splice(-1, 0, '.ts')
  }
  if (entry.vue) {
    exts.splice(-1, 0, '.vue')
  }

  return {
    extensions: exts,
    alias: { '@': entry.root }
  }
}

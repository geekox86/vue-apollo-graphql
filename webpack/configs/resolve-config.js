module.exports = (entry) => {
  const exts = ['.js', '.json']

  if (entry.typescript) {
    exts.splice(-1, 0, '.ts')
  }
  // todo: check if this can be always used
  if (entry.vue) {
    exts.splice(-1, 0, '.vue')
  }

  return {
    mainFields: ['browser', 'main', 'module'],
    extensions: exts,
    alias: { '@': entry.root }
  }
}

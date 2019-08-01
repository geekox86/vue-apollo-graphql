module.exports = (entry) => {
  return entry.mode == 'development' && entry.dev != undefined
}

module.exports = (entry) => {
  const path = require('path')

  return typeof entry.css == 'string' ?
    [
      path.resolve(entry.root, entry.input, entry.filename),
      path.resolve(entry.root, entry.input, entry.css)
    ] :
    path.resolve(entry.root, entry.input, entry.filename)
}

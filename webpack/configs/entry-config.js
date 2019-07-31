module.exports = (entry) => {
  const path = require('path')

  return typeof entry.css == 'string' ?
    [
      path.resolve(entry.root, 'codes', entry.filename),
      path.resolve(entry.root, 'codes', entry.css)
    ] :
    path.resolve(entry.root, 'codes', entry.filename)
}

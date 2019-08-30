module.exports = () => {
  const sass = require("sass")

  return {
    loader: 'sass-loader',
    options: {
      implementation: sass,
      sourceMap: true
    }
  }
}

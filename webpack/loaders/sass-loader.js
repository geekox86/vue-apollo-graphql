module.exports = () => {
  const Fiber = require('fibers')
  const sass = require("sass")

  return {
    loader: 'sass-loader',
    options: {
      implementation: sass,
      fiber: Fiber,
      sourceMap: true
    }
  }
}

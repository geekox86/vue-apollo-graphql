module.exports = () => {
  return {
    loader: 'file-loader',
    options: {
      name: '[path][name].[ext]'
    }
  }
}

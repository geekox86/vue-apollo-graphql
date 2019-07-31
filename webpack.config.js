const toConfig = require('./webpack')

module.exports = (_, { mode }) => {
  return [
    {
      filename: 'index.ts',
      target: 'web',
      engines: 'last 1 versions',
      modules: true,
      externals: true,
      html: false, // 'template.html',
      babel: true,
      typescript: true,
      vue: true,
      css: 'index.css',
      postcss: true,
      stylus: false,
      extractCss: true,
      assets: /\.(json|aac|m4a|mp3|mp4|oga|wav|webm|gif|jpg|jpeg|png|svg|eot|otf|ttf|woff|woff2)$/,
      dev: 'server' // 'watch'
    }
  ].map((entry) => toConfig({
    mode,
    root: __dirname,
    ...entry
  }))
}

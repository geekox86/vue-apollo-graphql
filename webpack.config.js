const toConfig = require('./webpack')

const root = __dirname
const input = 'codes'
const output = 'builds'
const entries = [
  {
    filename: 'client.ts',
    target: 'web',
    engines: 'last 1 versions',
    modules: false,
    externals: false,
    html: 'template.html',
    babel: true,
    typescript: true,
    vue: true,
    vuetify: true,
    css: 'globals.css',
    postcss: true,
    sass: true,
    stylus: false,
    extractCss: true,
    assets: /\.(json|aac|m4a|mp3|mp4|oga|wav|webm|gif|jpg|jpeg|png|svg|eot|otf|ttf|woff|woff2)$/,
    dev: 'server' // 'watch'
  }
]

module.exports = (_, { mode }) => {
  return entries.map((entry) => toConfig({
    mode,
    root,
    input,
    output,
    ...entry
  }))
}

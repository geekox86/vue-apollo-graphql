const toConfig = require('./webpack')

const root = __dirname
const input = 'codes'
const output = 'builds'
const assets = {
  data: /\.json$/,
  fonts: /\.(eot|otf|ttf|woff|woff2|svg)$/,
  images: /\.(gif|jpg|jpeg|png)$/,
  audio: /\.(aac|m4a|mp3|oga|wav|webm)$/,
  video: /\.mp4$/
}
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
    less: false,
    stylus: false,
    extractCss: 'chunk', // 'entry'
    minifyFa: true,
    cache: true,
    dev: 'server' // 'watch'
  }
]

module.exports = (_, { mode }) => {
  if (!mode) {
    mode = 'development'
  }

  return entries.map((entry) => toConfig({
    mode,
    root,
    input,
    output,
    assets,
    ...entry
  }))
}

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
    // node: {},
    html: 'template.html',
    babel: true,
    typescript: true,
    vue: true,
    vuetify: true,
    css: true, // 'globals.css',
    postcss: true,
    sass: true,
    less: false,
    stylus: false,
    extractCss: 'entry', // 'chunk', // 'entry',
    minify: true,
    hash: true,
    cache: false,
    // optimization: {},
    // performance: {},
    // stats: {},
    dev: 'server', // 'watch',
    // watchOptions: {},
    miscOptions: { profile: true }
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

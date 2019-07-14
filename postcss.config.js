const cssnano = require('cssnano')
const postcssImport = require('postcss-import')
const postcssPresetEnv = require('postcss-preset-env')
const postcssPurgecss = require('@fullhuman/postcss-purgecss')
const tailwindcss = require('tailwindcss')

const config = {
  plugins: [
    postcssImport,
    tailwindcss,
    // postcssPurgecss({
    //   content: ['./codes/**/*.tsx'],
    //   defaultExtractor: (content) => content.match(/[\w\d-_:/]+/g) || []
    // }),
    postcssPresetEnv,
    cssnano
  ]
}

module.exports = config

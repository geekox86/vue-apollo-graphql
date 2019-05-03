const cssnano = require('cssnano')
const postcssImport = require('postcss-import')
const postcssPresetEnv = require('postcss-preset-env')
const postcssPurgeCss = require('@fullhuman/postcss-purgecss')
const tailwindcss = require('tailwindcss')

const config = {
  plugins: [
    postcssImport,
    tailwindcss,
    postcssPurgeCss({
      content: ['./codes/**/*.tsx'],
      defaultExtractor: (content) => content.match(/[\w\d-_:/]+/g) || []
    }),
    postcssPresetEnv,
    cssnano
  ]
}

module.exports = config

const tailwindcssPlugin = () => {
  return require('tailwindcss')
}

const postcssPurgecssPlugin = (entry) => {
  if (entry.mode == 'production') {
    const postcssPurgecss = require('@fullhuman/postcss-purgecss')

    return postcssPurgecss({
      content: [`./${ entry.input }/**/*.vue`],
      defaultExtractor: (content) => content.match(/[\w\d-_:/]+/g) || []
    })
  }
}

const postcssPresetEnvPlugin = (entry) => {
  if (entry.mode == 'production') {
    const postcssPresetEnv = require('postcss-preset-env')

    return postcssPresetEnv({ browsers: entry.engines })
  }
}

const cssnanoPlugin = (entry) => {
  if (entry.mode == 'production') {
    return require('cssnano')
  }
}

module.exports = (entry) => {
  if (entry.postcss) {
    return {
      loader: 'postcss-loader',
      options: {
        plugins: [
          tailwindcssPlugin(entry),
          postcssPurgecssPlugin(entry),
          postcssPresetEnvPlugin(entry),
          cssnanoPlugin(entry)
        ].filter((plugin) => plugin),
        sourceMap: true
      }
    }
  }
}

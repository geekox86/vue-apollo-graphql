module.exports = (entry) => {
  if (entry.postcss) {
    const cssnanoPlugin = (entry) => {
      if (entry.mode == 'production' && entry.minify) {
        return require('cssnano')
      }
    }

    const tailwindcssPlugin = () => {
      return require('tailwindcss')
    }

    const postcssImportPlugin = (entry) => {
      const postcssImport = require('postcss-import')

      return postcssImport({ root: entry.root })
    }

    const postcssPresetEnvPlugin = (entry) => {
      if (entry.mode == 'production') {
        const postcssPresetEnv = require('postcss-preset-env')

        return postcssPresetEnv({ browsers: entry.engines })
      }
    }

    return {
      loader: 'postcss-loader',
      options: {
        plugins: [
          postcssImportPlugin(entry),
          tailwindcssPlugin(entry),
          postcssPresetEnvPlugin(entry),
          cssnanoPlugin(entry)
        ].filter((plugin) => plugin),
        sourceMap: true
      }
    }
  }
}

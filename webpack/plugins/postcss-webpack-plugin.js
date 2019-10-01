module.exports = (entry) => {
  if (entry.postcss) {
    const postcss = require('postcss')
    const { SourceMapSource } = require('webpack-sources')

    const cssnanoPlugin = (entry) => {
      if (entry.mode == 'production' && entry.minify) {
        return require('cssnano')
      }
    }

    const postcssPresetEnvPlugin = (entry) => {
      if (entry.mode == 'production') {
        const postcssPresetEnv = require('postcss-preset-env')

        return postcssPresetEnv({ browsers: entry.engines })
      }
    }

    const postcssPurgecssPlugin = (entry, content) => {
      if (entry.mode == 'production' && entry.minify) {
        const postcssPurgecss = require('@fullhuman/postcss-purgecss')

        return postcssPurgecss({
          content: content,
          defaultExtractor: (content) => content.match(/[\w\d-_:/]+(?<!:)/g) || [],
          fontFace: true,
          keyframes: true
        })
      }
    }

    // todo: add tailwindcss option to webpack configuration and adjust apply function accordingly
    const tailwindcssPlugin = () => {
      return require('tailwindcss')
    }

    class PostcssWebpackPlugin {
      // todo: enhance to enable processing without css extraction
      apply(compiler) {
        compiler.hooks.emit.tapPromise('PurgecssWebpackPlugin', async (compilation) => {
          const dependants = []
          const dependencies = []

          for (const asset of Object.keys(compilation.assets)) {
            if (asset.match(/\.(html|js)$/)) {
              dependants.push(asset)
            }
            if (asset.match(/\.css$/)) {
              dependencies.push(asset)
            }
          }

          const postcssProcessor = postcss([
            tailwindcssPlugin(entry),
            postcssPurgecssPlugin(entry, dependants.map((dependant) => ({ raw: compilation.assets[dependant].source() }))),
            postcssPresetEnvPlugin(entry),
            cssnanoPlugin(entry)
          ].filter((plugin) => plugin))

          for (const dependency of dependencies) {
            const originalCss = compilation.assets[dependency].source()
            const processedCss = await postcssProcessor.process(originalCss, {
              from: dependency,
              to: dependency,
              map: {
                inline: false, // todo: check if this should be inlined in development mode
                prev: compilation.assets[dependency].map()
              }
            })

            // todo: check correctness of generated sourcemaps and hashes
            compilation.assets[dependency] = new SourceMapSource(processedCss.css, dependency, processedCss.map)
          }
        })
      }
    }

    return new PostcssWebpackPlugin()
  }
}

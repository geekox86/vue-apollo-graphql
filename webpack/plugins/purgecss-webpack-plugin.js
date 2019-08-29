module.exports = (entry) => {
  if (entry.mode == 'production' && entry.minify) {
    const postcss = require('postcss')
    const postcssPurgecss = require('@fullhuman/postcss-purgecss')
    const { SourceMapSource } = require('webpack-sources')

    class PurgecssWebpackPlugin {
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

          const postcssProcessor = postcss([postcssPurgecss({
            content: dependants.map((dependant) => ({ raw: compilation.assets[dependant].source() })),
            defaultExtractor: (content) => content.match(/[\w\d-_:/]+(?<!:)/g) || [],
            fontFace: true,
            keyframes: true
          })])

          for (const dependency of dependencies) {
            const originalCss = compilation.assets[dependency].source()
            const minifiedCss = await postcssProcessor.process(originalCss, {
              from: dependency,
              to: dependency,
              map: {
                inline: false,
                prev: compilation.assets[dependency].map()
              }
            })

            compilation.assets[dependency] = new SourceMapSource(minifiedCss.css, dependency, minifiedCss.map)
          }
        })
      }
    }

    return new PurgecssWebpackPlugin()
  }
}

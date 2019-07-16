const postcssPurgecss = require('@fullhuman/postcss-purgecss')
const CaseSensitivePathsWebpackPlugin = require('case-sensitive-paths-webpack-plugin')
const cssnano = require('cssnano')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const postcssImport = require('postcss-import')
const postcssPresetEnv = require('postcss-preset-env')
const tailwindcss = require('tailwindcss')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpackNodeExternals = require('webpack-node-externals')
const WebpackBar = require('webpackbar')

const entries = [
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
    css: true, // 'globals.css',
    postcss: true,
    stylus: true,
    extractCss: true,
    assets: /\.(json|aac|m4a|mp3|mp4|oga|wav|webm|gif|jpg|jpeg|png|svg|eot|otf|ttf|woff|woff2)$/,
    dev: 'server' // 'watch'
  }
]

const babelEnvPreset = (entry) => {
  if (entry.mode == 'production') {
    return [
      '@babel/env',
      {
        targets: entry.engines,
        corejs: '3',
        useBuiltIns: 'usage',
        modules: false
      }
    ]
  }
}
const babelProposalsPreset = (entry) => {
  if (entry.mode == 'production') {
    return [
      'babel-preset-proposals',
      {all: true}
    ]
  }
}

const babelRootImportPlugin = (entry) => {
  if (entry.mode == 'production' && entry.modules) {
    return [
      'babel-plugin-root-import',
      {rootPathPrefix: '@'}
    ]
  }
}

const postcssImportPlugin = () => {
  return postcssImport
}
const tailwindcssPlugin = () => {
  return tailwindcss
}
const postcssPurgecssPlugin = (entry) => {
  if (entry.mode == 'production') {
    return postcssPurgecss({
      content: ['./codes/**/*.tsx'],
      defaultExtractor: (content) => content.match(/[\w\d-_:/]+/g) || []
    })
  }
}
const postcssPresetEnvPlugin = (entry) => {
  if (entry.mode == 'production') {
    return postcssPresetEnv({browsers: entry.engines})
  }
}
const cssnanoPlugin = (entry) => {
  if (entry.mode == 'production') {
    return cssnano
  }
}

const babelLoader = (entry) => {
  if (entry.babel) {
    const presets = [
      babelEnvPreset(entry),
      babelProposalsPreset(entry)
    ].filter((preset) => preset)
    const plugins = [babelRootImportPlugin(entry)].filter((plugin) => plugin)

    if (presets.length || plugins.length) {
      return {
        loader: 'babel-loader',
        options: {
          presets: presets,
          plugins: plugins
        }
      }
    }
  }
}
const tsLoader = (entry) => {
  return {
    loader: 'ts-loader',
    options: {
      onlyCompileBundledFiles: true,
      compilerOptions: {
        declaration: entry.mode == 'production' && entry.modules,
        declarationDir: 'builds'
      }
    }
  }
}
const vueLoader = () => {
  return 'vue-loader'
}
const emitFileLoader = (entry) => {
  if (entry.mode == 'production' && entry.modules) {
    return {
      loader: 'emit-file-loader',
      options: {
        context: path.resolve(__dirname),
        output: '[path][name].js'
      }
    }
  }
}
const styleLoader = (entry) => {
  if (entry.mode == 'development' && !entry.vue) {
    return {
      loader: 'style-loader',
      options: { sourceMap: true }
    }
  }
}
const cssLoader = (_, importLoaders) => {
  return {
    loader: 'css-loader',
    options: {
      importLoaders: importLoaders,
      sourceMap: true
    }
  }
}
const postcssLoader = (entry) => {
  if (entry.postcss) {
    return {
      loader: 'postcss-loader',
      options: {
        plugins: [
          postcssImportPlugin(entry),
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
const stylusLoader = () => {
  return {
    loader: 'stylus-loader',
    options: {
      preferPathResolver: 'webpack',
      sourceMap: true
    }
  }
}
const vueStyleLoader = (entry) => {
  if (entry.mode == 'development' && entry.vue) {
    return 'vue-style-loader'
  }
}
const miniCssExtractLoader = (entry) => {
  if (entry.mode == 'production' && entry.extractCss) {
    return MiniCssExtractPlugin.loader
  }
}
const fileLoader = () => {
  return {
    loader: 'file-loader',
    options: {
      name: '[path][name].[ext]'
    }
  }
}

const jsRule = (entry) => {
  const loaders = [
    emitFileLoader(entry),
    babelLoader(entry)
  ].filter((loader) => loader)

  if (loaders.length) {
    return {
      test: /\.js$/,
      use: loaders
    }
  }
}
const tsRule = (entry) => {
  if (entry.typescript) {
    return {
      test: /\.ts$/,
      use: [
        emitFileLoader(entry),
        babelLoader(entry),
        tsLoader(entry)
      ].filter((loader) => loader)
    }
  }
}
const vueRule = (entry) => {
  if (entry.vue) {
    return {
      test: /\.vue$/,
      loader: vueLoader(entry)
    }
  }
}
const cssRule = (entry) => {
  if (entry.css) {
    return {
      test: /\.css$/,
      use: [
        styleLoader(entry),
        vueStyleLoader(entry),
        miniCssExtractLoader(entry),
        cssLoader(entry, 1),
        postcssLoader(entry)
      ].filter((loader) => loader)
    }
  }
}
const stylusRule = (entry) => {
  if (entry.stylus) {
    return {
      test: /\.styl(us)?$/,
      use: [
        styleLoader(entry),
        vueStyleLoader(entry),
        miniCssExtractLoader(entry),
        cssLoader(entry, 2),
        postcssLoader(entry),
        stylusLoader(entry)
      ].filter((loader) => loader)
    }
  }
}
const assetsRule = (entry) => {
  if (entry.assets) {
    return {
      test: entry.assets,
      use: fileLoader(entry)
    }
  }
}

const caseSensitivePathsWebpackPlugin = () => {
  return new CaseSensitivePathsWebpackPlugin()
}
const friendlyErrorsWebpackPlugin = () => {
  return new FriendlyErrorsWebpackPlugin({ clearConsole: false })
}
const webpackBarPlugin = () => {
  return new WebpackBar({ fancy: true })
}
const vueLoaderPlugin = (entry) => {
  if (entry.vue) {
    return new VueLoaderPlugin()
  }
}
const miniCssExtractPlugin = (entry) => {
  if (entry.extractCss) {
    return new MiniCssExtractPlugin({ filename: entry.filename.replace(/\.[^.]+$/, '.css') })
  }
}
const htmlWebpackPlugin = (entry) => {
  if (entry.html) {
    return new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'codes', entry.html),
      filename: entry.filename.replace(/\.[^.]+$/, '.html')
    })
  }
}

const contextConfig = () => {
  return path.resolve(__dirname)
}
const entryConfig = (entry) => {
  return typeof entry.css == 'string' ?
    [
      path.resolve(__dirname, 'codes', entry.filename),
      path.resolve(__dirname, 'codes', entry.css)
    ] :
    path.resolve(__dirname, 'codes', entry.filename)
}
const targetConfig = (entry) => {
  return entry.target
}
const outputConfig = (entry) => {
  return {
    path: path.resolve(__dirname, 'builds'),
    publicPath: '.',
    filename: entry.filename.replace(/\.[^.]+$/, '.js'),
    libraryTarget: entry.modules ? 'commonjs2' : false
  }
}
const externalsConfig = (entry) => {
  if (entry.externals) {
    return [webpackNodeExternals()]
  }
}
const resolveConfig = (entry) => {
  const exts = ['.js', '.json']

  if (entry.typescript) {
    exts.splice(-1, 0, '.ts')
  }
  if (entry.vue) {
    exts.splice(-1, 0, '.vue')
  }

  return {
    extensions: exts,
    alias: { '@': path.resolve(__dirname) }
  }
}
const moduleConfig = (entry) => {
  return {
    rules: [
      jsRule(entry),
      tsRule(entry),
      vueRule(entry),
      cssRule(entry),
      stylusRule(entry),
      assetsRule(entry)
    ].filter((rule) => rule)
  }
}
const pluginsConfig = (entry) => {
  return [
    caseSensitivePathsWebpackPlugin(entry),
    friendlyErrorsWebpackPlugin(entry),
    webpackBarPlugin(entry),
    vueLoaderPlugin(entry),
    miniCssExtractPlugin(entry),
    htmlWebpackPlugin(entry)
  ].filter((plugin) => plugin)
}
const devtoolConfig = (entry) => {
  return entry.mode == 'development' ? 'eval-source-map' : 'source-map'
}
const devServerConfig = (entry) => {
  if (entry.mode == 'development' && entry.dev == 'server') {
    return {
      port: 8080,
      contentBase: path.resolve(__dirname, 'builds'),
      watchContentBase: true,
      historyApiFallback: true,
      compress: true,
      hot: true
    }
  }
}
const watchConfig = (entry) => {
  return entry.mode == 'development' && entry.dev
}
const statsConfig = () => {
  return false
}

module.exports = (_, { mode }) => {
  return entries.map((entry) => {
    entry.mode = mode

    return {
      context: contextConfig(entry),
      entry: entryConfig(entry),
      target: targetConfig(entry),
      output: outputConfig(entry),
      externals: externalsConfig(entry),
      resolve: resolveConfig(entry),
      module: moduleConfig(entry),
      plugins: pluginsConfig(entry),
      devtool: devtoolConfig(entry),
      devServer: devServerConfig(entry),
      watch: watchConfig(entry),
      stats: statsConfig(entry)
    }
  })
}

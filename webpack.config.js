const CleanWebpackPlugin = require('clean-webpack-plugin')
const Fiber = require('fibers')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const sass = require('sass')
const VueLoaderPlugin = require('vue-loader').VueLoaderPlugin
const HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin

const config = {
  mode: process.env.NODE_ENV !== 'production' ? 'development' : 'production',
  context: path.resolve(__dirname),
  entry: path.resolve(__dirname, 'codes', 'index.ts'),
  output: {
    path: path.resolve(__dirname, 'builds'),
    filename: 'index.ts',
    libraryTarget: 'commonjs2'
  },
  externals: ['vue'],
  resolve: {
    extensions: ['.js', 'jsx', '.ts', '.tsx', '.vue'],
    alias: {
      '@': '.',
      'vue$': 'vue/dist/vue.runtime.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: (fileName) => /node_modules/.test(fileName) && !/\.vue\.js$/.test(fileName)
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          process.env.NODE_ENV !== 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              implementation: sass,
              fiber: Fiber
            }
          }
        ]
      },
      {
        test: /\.(aac|m4a|mp3|mp4|oga|wav|webm|gif|jpg|jpeg|png|svg|eot|otf|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'index.css'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'codes', 'index.html'),
      filename: 'index.html'
    }),
    new HotModuleReplacementPlugin()
  ],
  devtool: 'source-map',
  devServer: {
    port: 8080,
    contentBase: path.resolve(__dirname, 'builds'),
    historyApiFallback: true,
    compress: true,
    hot: true
  }
}

module.exports = config

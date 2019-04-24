const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin

const config = {
  mode: process.env.NODE_ENV !== 'production' ? 'development' : 'production',
  context: path.resolve(__dirname),
  entry: path.resolve(__dirname, 'codes', 'index.ts'),
  output: {
    path: path.resolve(__dirname, 'builds'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  externals: ['vue'],
  resolve: {
    extensions: ['.js', 'jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname),
      'vue$': 'vue/dist/vue.runtime.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(ts|tsx)$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
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

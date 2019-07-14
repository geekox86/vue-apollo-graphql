const CaseSensitivePathsWebpackPlugin = require('case-sensitive-paths-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const FileManagerWebpackPlugin = require('filemanager-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const NoEmitWebpackPlugin = require('no-emit-webpack-plugin')
const path = require('path')
const { HotModuleReplacementPlugin } = require('webpack')
const WebpackChain = require('webpack-chain')
const webpackMerge = require('webpack-merge')
const webpackNodeExternals = require('webpack-node-externals')
const WebpackBar = require('webpackbar')
const WebpackEmitAllPlugin = require('webpack-emit-all-plugin')

// const config = new WebpackChain()

// config
//   .mode('development')
//   .context(path.resolve(__dirname))
//   .output
//     .path(path.resolve(__dirname, 'builds'))
//     .end()
//   .resolve
//     .extensions
//       .add(['.js', 'jsx', '.ts', '.tsx', '.json'])
//       .end()
//     .alias
//       .set('@', path.resolve(__dirname))
//       .end()
//     .end()
//   .module()
//     .rule('assets')
//       .test(/\.(aac|m4a|mp3|mp4|oga|wav|webm|gif|jpg|jpeg|png|svg|eot|otf|ttf|woff|woff2)$/)
//       .use('file-loader')
//         .tap()



// const config = {
//   templates: {
//     entry: 'index.html'
//   },
//   scripts: {
//     entry: 'index.ts',
//     babel: {
//       presets: {
//         env: {
//           corejs: '3',
//           useBuiltIns: 'usage'
//         },
//         proposals: true,
//         jsx: 'vue'
//       }
//     },
//     typescript: {
//       declaration: true
//     },
//     module: 'var',
//     externals: true,
//     sourceMap: true,
//     devServer: true,
//     watch: true
//   },
//   styles: {
//     entry: 'index.css',
//     css: true,
//     stylus: true,
//     postcss: {
//       import: true,
//       tailwindcss: true,
//       purgecss: true,
//       env: true,
//       cssnano: true
//     },
//     minicssextract: true,
//     sourceMap: true,
//   }
// }
//
// const webpack = (config) => {
//   const webpackChain = new WebpackChain()
//
//   return webpackChain.toConfig()
// }

const commonConfig = {
  mode: 'development',
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, 'builds')
  },
  resolve: {
    extensions: ['.js', 'jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname)
    }
  },
  module: {
    rules: [
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
    // new WebpackEmitAllPlugin(),
    // new CleanWebpackPlugin(),
    new FileManagerWebpackPlugin({
      onStart: {
        delete: ['builds/*']
      },
      onEnd: {
        move: [
          {
            source: 'builds/codes/*',
            destination: 'builds/*'
          }
        ]
      }
    }),
    new CaseSensitivePathsWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin({
      clearConsole: false
    }),
    new WebpackBar({
      fancy: true
    }),
    // new NoEmitWebpackPlugin()
  ],
  devtool: 'source-map',
  stats: false
}

const browserConfig = {
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'emit-file-loader',
            options: {
              context: path.resolve(__dirname),
              output: '[path][name].js'
            }
          },
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              onlyCompileBundledFiles: true
            }
          }
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          // MiniCssExtractPlugin.loader,
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
        test: /\.styl$/,
        use: [
          'style-loader',
          // MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'stylus-loader',
            options: {
              preferPathResolver: 'webpack',
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: 'index.css'
    // }),
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, 'codes', 'index.html'),
    //   filename: 'index.html'
    // }),
    // new HotModuleReplacementPlugin()
  ],
  // devServer: {
  //   port: 8080,
  //   contentBase: path.resolve(__dirname, 'builds'),
  //   historyApiFallback: true,
  //   compress: true,
  //   hot: true
  // }
}

const nodeConfig = {
  target: 'node',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(ts|tsx)$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              onlyCompileBundledFiles: true
            }
          }
        ]
      }
    ]
  },
  plugins: [new HotModuleReplacementPlugin()],
}

const libConfig = {
  output: {
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  externals: [webpackNodeExternals()],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: {
          loader: 'ts-loader',
          options: {
            onlyCompileBundledFiles: true,
            declaration: true,
            declarationDir: 'builds'
          }
        }
      }
    ]
  },
}

const config = [
  webpackMerge(
    commonConfig,
    browserConfig,
    {
      entry: [
        path.resolve(__dirname, 'codes', 'index.ts'),
        // path.resolve(__dirname, 'codes', 'index.css')
      ],
      output: {
        filename: 'index.js'
      },
      // plugins: [new WebpackEmitAllPlugin()]
    }
  ),
  // webpackMerge(
  //   commonConfig,
  //   nodeConfig,
  //   {
  //     entry: [
  //       path.resolve(__dirname, 'codes', 'index.ts')
  //     ],
  //     output: {
  //       filename: 'index.js'
  //     }
  //   }
  // )
]

module.exports = config

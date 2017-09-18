const webpack = require('webpack')
var WebpackPreBuildPlugin = require('pre-build-webpack')
var shell = require('shelljs')

module.exports = {
  entry: './src/lib.js',
  output: {
    filename: 'bin/lib.js',
    library: 'resp-parser',
    libraryTarget: 'umd'
  },
  externals: {
    nearley: 'nearley'
  },
  plugins: [
    new WebpackPreBuildPlugin(function (stats) {
      shell.exec('node node_modules/nearley/bin/nearleyc.js src/nearley/grammar.ne > src/nearley/grammar.js')
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          failOnWarning: false,
          failOnError: true
        }
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|src\/nearley\/grammar.js)/,
        enforce: "pre",
        loader: "eslint-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
}
const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
// const htmlWebpackPlgugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.base')

// const HtmlWebpackPluginConfig = new htmlWebpackPlgugin({
//   inject: 'body',
//   template: './index.html',
//   filename: 'index.html'
// })

const config = merge(baseConfig, {
  entry: {
    app: './src/index'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './public/dev/client'),
    publicPath: '/public'
  },
  devtool: 'source-map',
  devServer: {
    port: 8080,
    historyApiFallback: true,
    progress: true,
    proxy: {
      '/': {
        target: 'http://localhost:8000',
        secure: true
      }
    },
  }
})

module.exports = config

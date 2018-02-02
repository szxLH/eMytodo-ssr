const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const baseConfig = require('./webpack.base')

const config = merge(baseConfig, {
  entry: './server/template',
  output: {
    filename: 'generatorPage.js',
    // path: './server',
    path: path.resolve('./server'),
    // publicPath: '/public',
    library: 'page',
    libraryTarget: 'commonjs' 
  }
})

module.exports = config

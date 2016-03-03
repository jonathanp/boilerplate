var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    client: './src/client.js'
  },

  output: {
    filename: 'script.js',
    path: path.join(__dirname, 'assets'),
    publicPath: '/assets',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!sass!import-glob')
      }
    ]
  },

  postcss: [
    autoprefixer({ browsers: ['> 0%'] })
  ],

  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true })
  ]
};

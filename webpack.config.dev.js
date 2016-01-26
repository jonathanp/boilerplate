var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    client: ['./src/client.js', 'webpack-hot-middleware/client']
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
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: 'style!css!postcss!sass'
      }
    ]
  },

  postcss: [
    autoprefixer({ browsers: ['> 0%'] })
  ],

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

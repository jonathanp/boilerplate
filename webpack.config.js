var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    client: './src/client.js'
  },

  output: {
    filename: 'script.js',
    path: './assets',
    publicPath: '/',
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
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader')
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

var glob = require('glob');
var path = require('path');
var packageJson = require('./package.json');

var title = packageJson.title ? packageJson.title + ' style guide' : 'Style guide';

module.exports = {
  components: './src/components/**/template.jsx',
  skipComponentsWithoutExample: true,
  title: title,

  updateWebpackConfig: function(webpackConfig) {
    var componentStyles = glob.sync(path.join(__dirname, 'src/components/**/style.scss'));
    webpackConfig.entry = webpackConfig.entry.concat(componentStyles);

    webpackConfig.module.loaders.push(
      {
        test: /\.jsx?$/,
        include: __dirname + '/src',
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        include: __dirname + '/src',
        exclude: /node_modules/,
        loader: 'style!css!postcss!sass'
      }
    );

    return webpackConfig;
  }
};

var glob = require('glob');
var path = require('path');
var packageJson = require('./package.json');

var title = packageJson.title ? packageJson.title + ' style guide' : 'Style guide';

module.exports = {
  rootDir: './src/components',
  components: '**/template.jsx',
  skipComponentsWithoutExample: true,
  title: title,

  updateWebpackConfig: function(webpackConfig) {
    var componentStyles = glob.sync(path.join(__dirname, 'src/components/**/style.scss'));
    webpackConfig.entry = webpackConfig.entry.concat(componentStyles);

    webpackConfig.module.loaders.push({
      test: /\.scss$/,
      loader: 'style!css!postcss!sass'
    });

    return webpackConfig;
  }
};

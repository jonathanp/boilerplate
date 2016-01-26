var React = require('react');

/**
 * If we are in dev mode inject the styles via JS to be able to use Hot Reloading,
 * otherwise use a compiled CSS file.
 *
 * https://github.com/webpack/docs/wiki/hot-module-replacement-with-webpack
 */
var styles = process.env.NODE_ENV !== 'development' ? <link rel="stylesheet" href="/assets/style.css" /> : null;

var scripts = <script src="/assets/script.js" />;

var DefaultLayout = function(props) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {styles}
      </head>

      <body>
        {props.children}
        {scripts}
      </body>
    </html>
  );
};

module.exports = DefaultLayout;

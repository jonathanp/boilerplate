var React = require('react');

var DefaultLayout = function(props) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="stylesheet" href="/assets/style.css" />
      </head>
      <body>
        {props.children}
      </body>
      <script src="/assets/script.js"></script>
    </html>
  );
};

module.exports = DefaultLayout;

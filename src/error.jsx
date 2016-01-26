var React = require('react');
var DefaultLayout = require('./layout');

var Error = function(props) {
  return (
    <DefaultLayout>
      <main>
        <h1>{props.error.message}</h1>
        <pre>{props.error.stack}</pre>
      </main>
    </DefaultLayout>
  );
};

module.exports = Error;

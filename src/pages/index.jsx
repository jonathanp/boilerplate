var React = require('react');
var DefaultLayout = require('../layout');

var Index = function() {
  return (
    <DefaultLayout title="Index">
      <main>
        <h1>Templates</h1>
        <ul>
          <li><a href="/foo">Foo</a></li>
          <li><a href="/bar">Bar</a></li>
        </ul>
      </main>
    </DefaultLayout>
  );
};

module.exports = Index;

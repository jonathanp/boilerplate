var React = require('react');
var DefaultLayout = require('../layout');
var Button = require('../components/button/template');
var Hero = require('../components/hero/template');

var Foo = function() {
  return (
    <DefaultLayout title="Foo">
      <main>
        <Hero color="red" heading="Foo" />
        <Button color="red" label="En knapp" />
        <p>Ett vanligt HTML-element</p>
      </main>
    </DefaultLayout>
  );
};

module.exports = Foo;

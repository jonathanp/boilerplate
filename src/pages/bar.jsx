var React = require('react');
var DefaultLayout = require('../layout');
var Button = require('../components/button/template');
var Hero = require('../components/hero/template');

var Bar = function() {
  return (
    <DefaultLayout title="Bar">
      <main>
        <Hero color="blue" heading="Bar" />
        <Button color="blue" label="En knapp" />
        <p>Ett vanligt HTML-element</p>
      </main>
    </DefaultLayout>
  );
};

module.exports = Bar;

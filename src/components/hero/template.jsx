var React = require('react');

var Hero = function(props) {
  return (
    <header className={'hero hero--' + props.color}>
      <div className="hero__heading">{props.heading}</div>
    </header>
  );
};

Hero.displayName = 'Hero';

Hero.propTypes = {
  color: React.PropTypes.string,
  heading: React.PropTypes.string.isRequired
};

Hero.defaultProps = {
  color: 'red'
};

module.exports = Hero;

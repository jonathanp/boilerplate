var React = require('react');

var Button = function(props) {
  var className = 'button button--' + props.color;

  return (
    <button type="button" className={className}>{props.label}</button>
  );
};

Button.propTypes = {
  color: React.PropTypes.string,
  label: React.PropTypes.string.isRequired
};

Button.defaultProps = {
  color: 'red'
};

module.exports = Button;

var React = require('react');

/**
 * This component can be used to provide the user a simple way to trigger an event.
 *
 * Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue tincidunt dolor, sed
 * vehicula lectus cursus eu. In commodo, justo sit amet elementum imperdiet, mi felis vehicula
 * ipsum, tempus pretium sapien mauris sed nunc. Interdum et malesuada fames ac ante ipsum primis.
 */
var Button = function(props) {
  var className = 'button button--' + props.color;

  return (
    <button type="button" className={className}>{props.label}</button>
  );
};

Button.displayName = 'Button';

Button.propTypes = {
  color: React.PropTypes.oneOf(['red', 'blue']),

  /**
   * The text that should appear in the button
   */
  label: React.PropTypes.string.isRequired
};

Button.defaultProps = {
  color: 'red'
};

module.exports = Button;

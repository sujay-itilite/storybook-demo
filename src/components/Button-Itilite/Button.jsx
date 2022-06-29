import React from 'react';
import PropTypes from 'prop-types';
import './button2.css';
import moduleClasses from './custom.module.sass'

/**
 * Primary UI component for user interaction
 */
export const Button = ({ wide, backgroundColor, label, buttonState, ...props }) => {
  const mode = wide ? 'wideButton' : '';
  console.log(props, ' these are the button props')
  return (
    <button
      type={`button`}
      // className={`storybook-button storybook-button--primary button-${buttonState} ${moduleClasses[`${mode}`]}`}
      className={`storybook-button storybook-button--primary button-${buttonState} ${moduleClasses[`${mode}`]}`}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  wide: PropTypes.bool,
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  buttonState: PropTypes.oneOf(['default', 'hover', 'active', 'focus', 'selected', 'disabled']),
};

Button.defaultProps = {
  backgroundColor: null,
  wide: true,
  size: 'medium',
  label: 'label',
};

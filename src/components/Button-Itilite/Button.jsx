import React from 'react';
import PropTypes from 'prop-types';
import './button2.css';
import moduleClasses from './custom.module.sass'

/**
 * Primary UI component for user interaction
 */
export const Button = ({ wide, backgroundColor, label, buttonState, ...props }) => {
  const mode = wide ? 'wideButton' : '';
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
  /**
   * Is this the principal call to action on the page?
   */
  wide: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  // size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,

  buttonState: PropTypes.oneOf(['default', 'hover', 'active', 'focus', 'selected', 'disabled']),
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  wide: true,
  size: 'medium',
  onClick: undefined,
  label: 'label',
};

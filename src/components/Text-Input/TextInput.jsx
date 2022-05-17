import React from 'react';
import PropTypes from 'prop-types';
import moduleClasses from './style.module.sass'

export const TextInput = ({ wide, backgroundColor, label, buttonState, ...props }) => {
  const mode = wide ? 'wideButton' : '';
  return (
    <button
      type={`button`}
      className={`storybook-button storybook-button--primary button-${buttonState} ${moduleClasses[`${mode}`]}`}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

TextInput.propTypes = {
  wide: PropTypes.bool,
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  TextInputState: PropTypes.oneOf(['default', 'hover', 'active', 'focus', 'selected', 'disabled']),
  onClick: PropTypes.func,
};

TextInput.defaultProps = {
  backgroundColor: null,
  wide: true,
  size: 'medium',
  onClick: undefined,
  label: 'label',
};

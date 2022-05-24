import React from 'react';
import PropTypes from 'prop-types';
import moduleClasses from './style.module.sass'

export const TextInput = ({ wide, backgroundColor, label, buttonState, ...props }) => {
  const mode = wide ? 'wideButton' : '';
  console.log(props, ' these are the props')
  return (
    <input
      type={`text`}
      className={moduleClasses.itltTextfield}
      {...props}
    >
    </input>
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
  label: 'label',
};

import React from 'react';
import PropTypes from 'prop-types';
import moduleClasses from './style.module.sass'

export const TextInput = ({ wide, backgroundColor, label, placeholder, ...props }) => {
  console.log(props, ' these are the props')
  return (
    <input
      type={`text`}
      className={moduleClasses.itltTextfield}
      {...props}
      placeholder={placeholder}
    >
    </input>
  );
};


TextInput.parameters = { pseudo: { hover: true } }

TextInput.propTypes = {
  wide: PropTypes.bool,
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

TextInput.defaultProps = {
  backgroundColor: null,
  wide: true,
  size: 'medium',
  label: 'label',
  placeholder: 'Placeholder'
};

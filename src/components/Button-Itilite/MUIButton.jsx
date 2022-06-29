import React from 'react';
import PropTypes from 'prop-types';
import { Button as MUIButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import moduleClasses from './custom.module.sass'
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, ...props }) => {
  return (
    <MUIButton
      className={`storybook-button storybook-button--primary} ${moduleClasses[`wideButton`]}`}
      startIcon={<AddIcon />}
      endIcon={<KeyboardArrowDownIcon/>}
      disableRipple={true}
      {...props}
    >
      {label}
    </MUIButton>
  );
};

Button.propTypes = {
    label: PropTypes.string.isRequired
};

Button.defaultProps = {
    label: 'Label'
};

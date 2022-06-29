import React from 'react';
import { Button } from './MUIButton';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'label',
  type: 'primary',
  startIcon: true,
  endIcon: true
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'label',
  type: 'secondary',
  startIcon: true,
  endIcon: true
};

export const Neutral = Template.bind({});
Neutral.args = {
  label: 'label',
  type: 'neutral',
  startIcon: true,
  endIcon: true
};
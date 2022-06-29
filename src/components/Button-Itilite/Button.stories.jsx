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
  icons: 'none'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'label',
  type: 'secondary',
  icons: 'none'
};

export const Neutral = Template.bind({});
Neutral.args = {
  label: 'label',
  type: 'neutral',
  icons: 'none'
};
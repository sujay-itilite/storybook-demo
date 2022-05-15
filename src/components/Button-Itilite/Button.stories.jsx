import React from 'react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  buttonState: 'default',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

export const Hover = Template.bind({});
Hover.args = {
  size: 'large',
  buttonState: 'hover',
};

export const Active = Template.bind({});
Active.args = {
  size: 'small',
  buttonState: 'active',
  // label: 'Button',
};

export const Focus = Template.bind({});
Focus.args = {
  size: 'small',
  buttonState: 'focus',
  // label: 'Button',
};

export const Selected = Template.bind({});
Selected.args = {
  size: 'small',
  buttonState: 'selected',
  // label: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: 'small',
  buttonState: 'disabled',
  // label: 'Button',
};

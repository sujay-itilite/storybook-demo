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
  wide: false,
  buttonState: 'default',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

export const Hover = Template.bind({});
Hover.args = {
  wide: false,
  // size: 'large',
  buttonState: 'hover',
};

export const Active = Template.bind({});
Active.args = {
  wide: false,
  // size: 'small',
  buttonState: 'active',
  // label: 'Button',
};

export const Focus = Template.bind({});
Focus.args = {
  wide: false,
  // size: 'small',
  buttonState: 'focus',
  // label: 'Button',
};

export const Selected = Template.bind({});
Selected.args = {
  wide: false,
  // size: 'small',
  buttonState: 'selected',
  // label: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  wide: false,
  // size: 'small',
  buttonState: 'disabled',
  // label: 'Button',
};

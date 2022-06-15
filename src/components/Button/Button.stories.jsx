import React from 'react';
import { Button } from './Button';
// import { withPseudo } from '@ergosign/storybook-addon-pseudo-states-react';

export default {
  title: 'Example/Button',
  component: Button,
  // decorators: [withPseudo],
  // parameters: {
  //   withPseudo: { selector: 'button.storybook-button' },
  // },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

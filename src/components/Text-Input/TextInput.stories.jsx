import React from 'react';
import { TextInput } from './TextInput';

// export default {
//   title: 'Components/TextInput',
//   component: TextInput,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//     TextInputState: {control: 'radio'}
//   },
// };

const Template = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  wide: false,
  TextInputState: 'default',
};
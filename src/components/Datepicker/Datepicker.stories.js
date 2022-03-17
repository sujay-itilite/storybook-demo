import React from "react";
import { Datepicker } from "./Datepicker";

export default {
    title: 'Example/Datepicker',
    component: Datepicker,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <Datepicker {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Datepicker',
};
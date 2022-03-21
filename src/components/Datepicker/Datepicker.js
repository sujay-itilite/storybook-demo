import React from "react";
import './datepicker.css'
import { DatePicker } from "baseui/datepicker";

import {BaseProvider, LightTheme} from 'baseui';
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

const engine = new Styletron();

export default () => {
    const [value, setValue] = React.useState([new Date()]);
    return (

        <React.StrictMode>
        <StyletronProvider value={engine}>
          <BaseProvider theme={LightTheme}>
            <DatePicker
                value={value}
                onChange={({ date }) =>
                setValue(Array.isArray(date) ? date : [date])
                }
            />
          </BaseProvider>
        </StyletronProvider>
      </React.StrictMode>



    );
  }

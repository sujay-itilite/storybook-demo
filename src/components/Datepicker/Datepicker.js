import React from "react";
import './datepicker.css'
import { DatePicker } from "baseui/datepicker";

// export const Datepicker = () => {
//     return <>
//         <DatePicker />
//     </>
// }

export default () => {
    const [value, setValue] = React.useState([new Date()]);
    return (
      <DatePicker
        value={value}
        onChange={({ date }) =>
          setValue(Array.isArray(date) ? date : [date])
        }
      />
    );
  }

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
        <StyletronProvider value={engine}>
          <BaseProvider theme={LightTheme}>
            <DatePicker
                value={value}
                onChange={({ date }) =>
                setValue(Array.isArray(date) ? date : [date])
                }
                overrides={{
                  InputWrapper: {
                    style: ({ $theme }) => ({
                      width: "324px",
                      background: '#fff',
                      borderColor: '#fff'
                      // ":hover": {
                      //   backgroundColor: "red"
                      // }
                    })
                  },
                  Input: {
                    props: {
                      overrides: {
                        Root: {
                          style: ({ $theme }) => ({
                            outline: `none`,
                            backgroundColor: "none"
                          })
                        },
                        Input: {
                          style: ({ $theme }) => ({
                            height: '30px',
                            backgroundColor: "#fff",
                            border: "1px solid #EC5D25",
                            outline: 'black',
                            borderRadius: "6px",
                            paddingright: '30px'
                          })
                        }
                      }
                    }
                  },
                  MonthYearSelectIconContainer: {
                    style: ({ $theme }) => ({
                      color: '#D1D5DB'
                    })
                  },
                  Day: {
                    style: ({
                      $theme,
                      $selected,
                      $isHovered,
                      $isHighlighted,
                    }) => ({
                      color: $selected || $isHovered
                        ? $theme.colors.white
                        : $theme.colors.calendarForeground,
                      ':after': {
                        backgroundColor:  $selected || $isHovered ? '#EC5D25' : 'white',
                        border: '0px'
                      },
                    }),
                  }
                  
                }
              }
            />
          </BaseProvider>
        </StyletronProvider>
    );
  }

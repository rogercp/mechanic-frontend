/**
 * Dependencies
 */

import React from 'react';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
/**
 *  Import styles
 */



/**
 * Define component
 */

function CarMaintenenceForm(props) {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

    return (
      <>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <h1>Car CarMaintenence Form</h1>

        <Switch
        defaultChecked
        value="checkedF"
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
        />

        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Task Completed"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            />
          </MuiPickersUtilsProvider>
        </>
    );
};

/**
 * Export component
 */

export default CarMaintenenceForm;

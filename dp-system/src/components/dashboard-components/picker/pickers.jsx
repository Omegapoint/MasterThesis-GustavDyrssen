import 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';

const styles = {
    grid: {
        width: '50%',
    },
};

class MaterialUIPickers extends React.Component {
    checkInstate = {
        // The first commit of Material-UI
        selectedCheckInDate: new Date(),
    };
    checkOutstate = {
        // The first commit of Material-UI
        selectedCheckOutDate: new Date('2014-08-18T21:11:54'),
    };

    handleDateChange = date => {
        this.setState({ selectedDate: date });
    };

    render() {
        const { classes } = this.props;
        const { selectedCheckInDate } = this.checkInstate;
        const { selectedCheckOutDate } = this.checkOutstate;

        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container className={classes.grid} justify="space-around">
                    <DatePicker
                        margin="normal"
                        label="Check In Date"
                        value={selectedCheckInDate}
                        onChange={this.handleDateChange}
                    />
                    <DatePicker
                        margin="normal"
                        label="Check Out Date"
                        value={selectedCheckOutDate}
                        onChange={this.handleDateChange}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
        );
    }
}

MaterialUIPickers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MaterialUIPickers);
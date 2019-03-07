import 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';

const styles = {
    grid: {
        width: '50%',
    },
};

class CheckOutPickers extends React.Component {
    state = {
        // The first commit of Material-UI
        selectedDate: new Date('2019-01-01T12:00:00'),
    };

    handleDateChange = date => {
        this.setState({ selectedDate: date });
    };

    render() {
        const { classes } = this.props;
        const { selectedDate } = this.state;

        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container className={classes.grid} justify="space-around">
                    <DatePicker
                        margin="normal"
                        label="Check-Out Date"
                        value={selectedDate}
                        onChange={this.handleDateChange}
                    />
                    <TimePicker
                        margin="normal"
                        label="Check-Out Time"
                        value={selectedDate}
                        onChange={this.handleDateChange}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
        );
    }
}

CheckOutPickers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckOutPickers);
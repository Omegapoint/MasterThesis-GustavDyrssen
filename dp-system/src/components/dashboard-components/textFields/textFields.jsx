import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 400,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

class TextFields extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="standard-uncontrolled"
                    label="Country"
                    defaultValue=" "
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="standard-uncontrolled"
                    label="City"
                    defaultValue=" "
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="standard-uncontrolled"
                    label="How many beds"
                    defaultValue=" "
                    className={classes.textField}
                    margin="normal"
                />  
                <TextField
                    id="standard-uncontrolled"
                    label="How many guests"
                    defaultValue=" "
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="standard-uncontrolled"
                    label="How many adults"
                    defaultValue=" "
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="standard-uncontrolled"
                    label="How many children"
                    defaultValue=" "
                    className={classes.textField}
                    margin="normal"
                />
            </form>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);

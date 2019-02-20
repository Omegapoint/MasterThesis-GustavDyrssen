import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import {
    Container,
    Col,
    Row,
    Card,
    CardBody,
    CardTitle
} from 'reactstrap';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

class TextFields extends React.Component {
    state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <Row>
                <TextField
                    id="standard-name"
                    label="Name"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"/>
                <TextField
                    id="standard-uncontrolled"
                    label="Uncontrolled"
                    defaultValue="foo"
                    className={classes.textField}
                    margin="normal"/>
                </Row>
                <Row>
                <TextField
                    required
                    id="standard-required"
                    label="Required"
                    defaultValue="Hello World"
                    className={classes.textField}
                    margin="normal"/>
                <TextField
                    disabled
                    id="standard-disabled"
                    label="Disabled"
                    defaultValue="Hello World"
                    className={classes.textField}
                    margin="normal"/>
                </Row>
                <Row>
                <TextField
                    id="standard-password-input"
                    label="Password"
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"/>
                <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    className={classes.textField}
                    value={this.state.currency}
                    onChange={this.handleChange('currency')}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    helperText="Please select your currency"
                    margin="normal">
                    {currencies.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                </Row>
            </form>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

class ConfirmationPayment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <div>
                <Button className="btn" color="primary" size="lg" onClick={this.toggle}>{this.props.buttonLabel}Continue</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Does everything match your booking?</ModalHeader>
                    <ModalBody>
                        Insert booking information
                    </ModalBody>
                    <ModalFooter>
                        <NavLink to="/userTest2point1End">
                            <Button className="btn" color="primary" size="lg" style={{ marginLeft: '15px' }}>Complete payment</Button>{' '}
                        </NavLink>
                        <Button className="btn" color="secondary" size="lg" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ConfirmationPayment;
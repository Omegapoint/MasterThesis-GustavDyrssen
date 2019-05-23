import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { css } from '@emotion/core';
import { PacmanLoader } from 'react-spinners';

import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class DpSearchLoaderModal extends React.Component {
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
                <Button className="btn" color="primary" size="lg" style={{ marginTop: '10px' }} onClick={this.toggle}>{this.props.buttonLabel} Search for available rooms </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Prossesing your search options</ModalHeader>
                    <ModalBody style={{ marginBottom: '25px' }} >
                        <PacmanLoader
                            css={override}
                            sizeUnit={"px"}
                            size={25}
                            color={'#36D7B7'}
                            loading={this.state.loading}
                            alaign={'left'}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <div class="ele"></div>
                        <NavLink to="/dpUserTestResults">
                            <Button className="btn" color="primary" size="lg" >Contine to search results </Button>{' '}
                        </NavLink>
                        <Button className="btn" color="secondary" size="lg" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default DpSearchLoaderModal;
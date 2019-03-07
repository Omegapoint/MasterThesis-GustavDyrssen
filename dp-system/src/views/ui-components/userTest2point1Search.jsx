import React from 'react';

import {
    Button,
    Badge,
    Container,
    Col,
    Row,
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardImg,
    CardImgOverlay,
} from 'reactstrap';

import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

import img5 from '../../assets/images/big/img5.jpg';
import { CheckInPickers, CheckOutPickers } from 'components/dashboard-components';
import { TextFields } from 'components/dashboard-components';

class LayoutComponent extends React.Component {
    constructor() {
        super();
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.setState({ checked });
    }

    render() {
        return <div>
            {/*--------------------------------------------------------------------------------*/}
            {/*Start Inner Div*/}
            {/*--------------------------------------------------------------------------------*/}
            <Col xs="12" md="12" sm="12">
                {/*--------------------------------------------------------------------------------*/}
                {/*Card-1*/}
                {/*--------------------------------------------------------------------------------*/}
                <Card>
                    <CardBody>
                        <CardTitle className="mb-0">
                            <i className="mdi mdi-arrange-send-backward mr-2"> </i>User Test 1
                        </CardTitle>
                    </CardBody>
                    <CardBody className="border-top">
                        <div>
                            <h2>Assignment Instructions<Badge color="secondary"></Badge></h2>

                            <h6>Imagine that you are going to travel and need to book a hotel room, you have decided to this through a hotel website that can offer a room for the best price. <Badge color="secondary"></Badge></h6>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            {/*--------------------------------------------------------------------------------*/}
            {/*Row*/}
            {/*--------------------------------------------------------------------------------*/}
            <Col xs="12" md="12" sm="12" >
            <Card inverse>
                <CardImg width="100%" src={img5} alt="Card image cap" />
                <CardImgOverlay>
                <CardBody>
                    <CardTitle className="mb-0"><i className="mdi mdi-apps mr-2"> </i>Choose Hotel Room Booking Preferences</CardTitle>
                </CardBody>
                <CardBody className="border-top">
                    <Container>
                        <Row className="mt-3">
                            <Col sm={6} lg={8}>
                                <CheckInPickers />
                            </Col> 
                        </Row> 
                        <Row className="mt-3">
                            <Col sm={6} lg={8}>
                                <CheckOutPickers />
                            </Col>
                        </Row> 
                        <Row className="mt-3">
                            <Col sm={6} lg={8}>
                                <TextFields />
                            </Col>
                        </Row>
                            <NavLink to="/userTest2point1Results">
                                <Button className="btn" color="primary" size="lg" style={{ marginTop: '15px' }} >Search for available rooms</Button>{' '}
                            </NavLink>
                    </Container>
                </CardBody>
                </CardImgOverlay> 
            </Card>
            </Col>
        </div>
    }
}

export default LayoutComponent;



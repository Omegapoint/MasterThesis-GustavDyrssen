import React from 'react';
import {
    Button,
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
import { MaterialUIPickers } from 'components/dashboard-components';
import { TextFields } from 'components/dashboard-components';
import userTest2point1Results from './userTest2point1Results';


class LayoutComponent extends React.Component {

    render() {
        return <div>
            {/*--------------------------------------------------------------------------------*/}
            {/*Start Inner Div*/}
            {/*--------------------------------------------------------------------------------*/}
            {/*--------------------------------------------------------------------------------*/}
            {/*Row*/}
            {/*--------------------------------------------------------------------------------*/}
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
                                <MaterialUIPickers />
                            </Col>
                        </Row> 
                        <Row className="mt-3">
                            <Col sm={6} lg={8}>
                                <TextFields />
                            </Col>
                        </Row>
                            <HashRouter>
                                <NavLink to="/userTest2point1Results">
                                    <Button className="btn" color="primary" size="lg">Search for available rooms</Button>{' '}
                                </NavLink>
                            </HashRouter>
                    </Container>
                </CardBody>
                </CardImgOverlay> 
            </Card>
        </div>
    }
}

export default LayoutComponent;



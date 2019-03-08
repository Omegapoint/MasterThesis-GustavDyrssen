import React from 'react';
import {
    Badge,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Row,
    Col
} from 'reactstrap';

import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

import { SalesSummary, Projects, Feeds } from 'components/dashboard-components';

class userTest2point1Welcome extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs="12" md="12" sm="12">
                        <Card>
                            <CardBody>
                                <CardTitle className="mb-0">
                                    <i className="mdi mdi-arrange-send-backward mr-2"> </i>Hello!</CardTitle>
                            </CardBody>
                            <CardBody className="border-top">
                                <div>
                                    <h3>Welcome</h3>
                                    <h5>You are about to participate in a user test developed by me, Gustav Dyrssen, to get some results for my master thesis project. I hope you will enjoy this and thank you so much for particiating!</h5>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12" md="12" sm="12">
                        <Card>
                            <CardBody>
                                <CardTitle className="mb-0">
                                    <i className="mdi mdi-arrange-send-backward mr-2"> </i>Instructions</CardTitle>
                            </CardBody>
                            <CardBody className="border-top">
                                <div>
                                    <h3>Be sure to read through the instructions thuroughly</h3>
                                    <h5>Imagine that you are going to travel and need to book a hotel room, you have decided to this through a hotel website that can offer a room for the best price.</h5> 
                                    <h5>When you feel ready, press the button below to continue.</h5>                        
                                </div>
                                <NavLink to="/userTest2point1Search">
                                    <Button className="btn" color="primary" size="lg">Start </Button>{' '}
                                </NavLink>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );

    }
}

export default userTest2point1Welcome;

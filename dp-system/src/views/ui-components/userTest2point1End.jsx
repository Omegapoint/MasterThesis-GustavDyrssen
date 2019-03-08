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

class userTest2point1End extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs="12" md="12" sm="12">
                        <Card>
                            <CardBody>
                                <CardTitle className="mb-0">
                                    <i className="mdi mdi-arrange-send-backward mr-2"> </i>Congratulations</CardTitle>
                            </CardBody>
                            <CardBody className="border-top">
                                <div>
                                    <h2>You have succesfully managed too book a room <Badge color="secondary"></Badge></h2>
                                    <h6>Thank you for participating in this user test!</h6>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12" md="12" sm="12">
                        <Card>
                            <CardBody>
                                <CardTitle className="mb-0">
                                    <i className="mdi mdi-arrange-send-backward mr-2"> </i>One last thing</CardTitle>
                            </CardBody>
                            <CardBody className="border-top">
                                <div>
                                    <h2>Please answer the questions on the seperate answering sheet</h2>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );

    }
}

export default userTest2point1End;

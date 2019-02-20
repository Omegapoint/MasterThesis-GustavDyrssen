import React from 'react';
import {
    Container,
    Col,
    Row,
    Card,
    CardBody,
    CardTitle
} from 'reactstrap';

import { MaterialUIPickers } from 'components/dashboard-components';
import { TextFeilds, OutlinedTextFields } from 'components/dashboard-components';


class LayoutComponent extends React.Component {

    render() {
        return <div>
            {/*--------------------------------------------------------------------------------*/}
            {/*Start Inner Div*/}
            {/*--------------------------------------------------------------------------------*/}
            {/*--------------------------------------------------------------------------------*/}
            {/*Row*/}
            {/*--------------------------------------------------------------------------------*/}
            <Card>
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
                                <TextFeilds />
                            </Col>
                            <Col sm={6} lg={8}>
                                <OutlinedTextFields />
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col xs="8">
                                <div className="bg-light p-2 border">
                                    .col-6
                          </div>
                            </Col>
                        </Row>
                    </Container>
                </CardBody>
            </Card>
            {/*--------------------------------------------------------------------------------*/}
            {/*Row*/}
            {/*--------------------------------------------------------------------------------*/}

            {/*--------------------------------------------------------------------------------*/}
            {/*End Inner Div*/}
            {/*--------------------------------------------------------------------------------*/}
        </div>
    }
}

export default LayoutComponent;


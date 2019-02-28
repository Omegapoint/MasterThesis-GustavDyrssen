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
    CardImgOverlay
} from 'reactstrap';

import img5 from '../../assets/images/big/img5.jpg';
import { MaterialUIPickers } from 'components/dashboard-components';
import { TextFields, OutlinedTextFields } from 'components/dashboard-components';


class LayoutComponent extends React.Component {

    render() {
        return <div>
            <Col xs="12" md="6">
                {/*--------------------------------------------------------------------------------*/}
                {/*Card-1*/}
                {/*--------------------------------------------------------------------------------*/}
                <Card inverse>
                    <CardImg width="100%" src={img5} alt="Card image cap" />
                    <CardImgOverlay>
                        <CardBody>
                            <CardTitle className="mb-0"><i className="mdi mdi-apps mr-2"> </i>Choose Hotel Room Booking Preferences</CardTitle>
                        </CardBody>
                        <CardText>There is curently a higher then normal demand of hotel rooms in the area you are searching. Beware so that the room you are looking for does not get fully booked.
                        </CardText>
                        <CardText>
                            <small className="text-white">Last updated 3 mins ago</small>
                        </CardText>
                    </CardImgOverlay>
                </Card>
            </Col>
            {/*--------------------------------------------------------------------------------*/}
            {/*Start Inner Div*/}
            {/*--------------------------------------------------------------------------------*/}
            {/*--------------------------------------------------------------------------------*/}
            {/*Row*/}
            {/*--------------------------------------------------------------------------------*/}
            <Card>
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
                            <Button className="btn" color="primary" size="lg">Search for available rooms</Button>{' '}
                    </Container>
                </CardBody>
                </CardImgOverlay> 
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



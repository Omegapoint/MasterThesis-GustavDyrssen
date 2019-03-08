import React from 'react';

import {
    Alert,
    Badge,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardLink,
    CardTitle,
    CardSubtitle,
    CardImgOverlay,
    CardGroup,
    Button,
    Row,
    Col
} from 'reactstrap';

import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

import img1 from '../../assets/images/big/img1.jpg';
import img2 from '../../assets/images/big/img2.jpg';
import img3 from '../../assets/images/big/img3.jpg';
import img4 from '../../assets/images/big/img4.jpg';
import img5 from '../../assets/images/big/img5.jpg';
import img6 from '../../assets/images/big/img6.jpg';
import img7 from '../../assets/images/background/weatherbg.jpg';
import { HotelRoomStatistics } from 'components/dashboard-components';
import radissonBluHotelRoomImg from 'assets/images/radissonBluHotelRoom.jpg';

class UserTest2point1Payment extends React.Component {

    render() {
        return <div>
            <Row>
                <Col xs="12" md="12" sm="12">
                    <Card>
                        <CardBody>
                            <CardTitle className="mb-0">
                                <i className="mdi mdi-arrange-send-backward mr-2"> </i>You have searched for hotel rooms by the french riviera on a specific date and time.
                                </CardTitle>
                        </CardBody>
                        <CardBody className="border-top">
                            <div>
                                <h2>Below are your results and options.<Badge color="secondary"></Badge></h2>
                                <h6>You are now trying to book a hotel room through the website. <Badge color="secondary"></Badge></h6>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col sm="6">
                    <Card>
                        <CardBody>
                            <CardTitle className="mb-0">
                                <i className="mdi mdi-arrange-send-backward mr-2"> </i>Congratulations you have sucessfully chosen a room to book
                                </CardTitle>
                        </CardBody>
                        <CardBody className="border-top">
                            <div>
                                <h2>Finish your booking
                                    <NavLink to="/userTest2point1End">
                                        <Button className="btn" color="primary" size="lg" style={{ marginLeft: '15px' }} >Pay for your room</Button>{' '}
                                    </NavLink>
                                </h2>
                            </div>
                        </CardBody>
                    </Card>
                    <Card body outline color="warning" className="border">
                        <CardTitle>Don't miss your chance</CardTitle>
                        <CardText>A hotel room was just booked at the hotel option you are looking at.</CardText>
                        <Button color="warning">Click to see what room it was</Button>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card>
                        <CardImg top width="100%" src={radissonBluHotelRoomImg} />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    }
}

export default UserTest2point1Payment;

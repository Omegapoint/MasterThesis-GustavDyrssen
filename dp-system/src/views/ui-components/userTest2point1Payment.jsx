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
import { ConfirmationPayment } from '../../components/dashboard-components';

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
                                <h3>Below are your results and options.</h3>
                                <h6>You are now trying to book a hotel room through the website.</h6>
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
                            <Row>
                                <h2 style={{ marginLeft: '15px', marginRight: '15px', marginTop: '3px' }}>Finish booking</h2>
                                <ConfirmationPayment />
                            </Row>
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
                            <CardTitle>Your chosen room</CardTitle>
                            <CardSubtitle>Hotel name like, Radisson Blu</CardSubtitle>
                            <CardText>Hotel room information</CardText>
                            <Button>Show picutures of your room</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    }
}

export default UserTest2point1Payment;

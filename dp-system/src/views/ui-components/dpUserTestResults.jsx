import React from 'react';

import {
    Alert,
    Badge,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardImgOverlay,
    CardGroup,
    Button,
    Row,
    Col,
    Progress
} from 'reactstrap';

import img1 from '../../assets/images/big/img1.jpg';
import img2 from '../../assets/images/big/img2.jpg';
import img3 from '../../assets/images/big/img3.jpg';
import img4 from '../../assets/images/big/img4.jpg';
import img5 from '../../assets/images/big/img5.jpg';
import img6 from '../../assets/images/big/img6.jpg';
import img7 from '../../assets/images/background/weatherbg.jpg';
import { HotelRoomStatistics, DpHotelRoomComponent, Feeds } from 'components/dashboard-components';

class DpUserTestResults extends React.Component {

    render() {
        return <div>
            <Row>
                <Col sm={12}>
                    <Progress animated value="50" style={{ marginBottom: '15px' }} size="large" />
                </Col>
                <Col sm={6} lg={8}>
                    <Card inverse>
                        <CardImg width="50%" src={img7} alt="Card image cap" />
                        <CardImgOverlay>
                            <CardTitle>High Demand</CardTitle>
                            <CardText>There is curently a higher then normal demand of hotel rooms in the area you are searching. Beware so that the room you are looking for does not get fully booked.</CardText>
                            <CardText>
                                <small className="text-white">Last updated 3 mins ago</small>
                            </CardText>
                        </CardImgOverlay>
                    </Card>
                </Col>
                <Col sm={12}>
                    <DpHotelRoomComponent />
                </Col>
                <Col sm={6} lg={8}>
                    <HotelRoomStatistics />
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <DpHotelRoomComponent />
                </Col>
                <Col xs="12" md="4">
                    <Card body outline color="warning" className="border">
                        <CardTitle>Don't miss your chance</CardTitle>
                        <CardText>A hotel room was just booked at one of the option you are looking at.</CardText>
                        <Button color="warning">Proceed to see what room it was</Button>
                    </Card>
                </Col>
            </Row>
        </div>
    }
}

export default DpUserTestResults;



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
    Col
} from 'reactstrap';

import img1 from '../../assets/images/big/img1.jpg';
import img2 from '../../assets/images/big/img2.jpg';
import img3 from '../../assets/images/big/img3.jpg';
import img4 from '../../assets/images/big/img4.jpg';
import img5 from '../../assets/images/big/img5.jpg';
import img6 from '../../assets/images/big/img6.jpg';
import img7 from '../../assets/images/background/weatherbg.jpg';
import { HotelRoomStatistics, HotelRoomComponent, Feeds } from 'components/dashboard-components';

class UserTest2point1Results extends React.Component {

    render() {
        return <div>
            <Row>
                <Col sm={12}>
                        <HotelRoomComponent />
                </Col>
            </Row>
        </div>
    }
}

export default UserTest2point1Results;



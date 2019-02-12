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
import { HotelRoomStatistics, HotelRoomComponent } from 'components/dashboard-components';



class UserTest2point1 extends React.Component {

    render() {
        return <div>
            {/*--------------------------------------------------------------------------------*/}
            {/*Start Inner Div*/}
            {/*--------------------------------------------------------------------------------*/}

            {/*--------------------------------------------------------------------------------*/}
            {/*Row*/}
            {/*--------------------------------------------------------------------------------*/}
            <Row>
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
                
                <Col sm={12}>
                    <HotelRoomComponent />
                </Col>
               
                {/*--------------------------------------------------------------------------------*/}
                {/*Card-group-1*/}
                {/*--------------------------------------------------------------------------------*/}
                
                {/*--------------------------------------------------------------------------------*/}
                {/*Card-group-2*/}
                {/*--------------------------------------------------------------------------------*/}

            </Row>
            {/*--------------------------------------------------------------------------------*/}
            {/*Row*/}
            {/*--------------------------------------------------------------------------------*/}

            {/*--------------------------------------------------------------------------------*/}
            {/*End Inner Div*/}
            {/*--------------------------------------------------------------------------------*/}
        </div>
    }
}

export default UserTest2point1;



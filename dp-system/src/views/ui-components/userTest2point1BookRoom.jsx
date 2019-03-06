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
import { HotelRoomStatistics } from 'components/dashboard-components';


class UserTest2 extends React.Component {

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
                <Col xs="12" md="12" sm="12">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-2*/}
                    {/*--------------------------------------------------------------------------------*/}
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
                {/*--------------------------------------------------------------------------------*/}
                {/*Card-group-1*/}
                {/*--------------------------------------------------------------------------------*/}
                <Col xs="12" md="12" sm="12">
                    <h5 className="mb-3">Search results</h5>
                    <CardGroup>
                        <Card>
                            <CardImg top width="100%" src={img4} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Hotel room close to city center</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                <Button>Book now before the hotel gets full</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%" src={img5} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Hotel room with a view over the ocean</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                <Button>Book hotel room</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%" src={img3} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Hotel room with nature, forest and hiking routes</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                                <Button>Continue to book room</Button>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </Col>
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

export default UserTest2;



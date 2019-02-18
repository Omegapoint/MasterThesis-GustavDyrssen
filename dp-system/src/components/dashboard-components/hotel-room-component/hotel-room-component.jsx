import React from "react";

import img1 from 'assets/images/users/1.jpg';
import img2 from 'assets/images/users/2.jpg';
import img3 from 'assets/images/users/3.jpg';
import img4 from 'assets/images/users/4.jpg';

import hilton from 'assets/images/hilton.png';
import radissonblu from 'assets/images/radissonblu.png';
import marriott from 'assets/images/marriott.png';
import sheraton from 'assets/images/sheraton.png';

import hiltonHotelRoomImg from 'assets/images/hiltonHotelRoom.jpg';
import radissonBluHotelRoomImg from 'assets/images/radissonBluHotelRoom.jpg';
import marriottHotelRoomImg from 'assets/images/marriottHotelRoom.jpg';
import sheratonHotelRoomImg from 'assets/images/sheratonHotelRoom.jpg';

import {
    Alert,
    Button,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Input,
    Table,
    Tooltip
} from 'reactstrap';

class HotelRoomComponent extends React.Component {
    constructor(props) {
        super(props);

        this.toggle10 = this.toggle10.bind(this);
        this.toggle20 = this.toggle20.bind(this);
        this.toggle30 = this.toggle30.bind(this);
        this.toggle40 = this.toggle40.bind(this);
        this.toggle50 = this.toggle50.bind(this);
        this.toggle60 = this.toggle60.bind(this);
        this.toggle70 = this.toggle70.bind(this);
        this.toggle80 = this.toggle80.bind(this);
        this.state = {
            tooltipOpen10: false,
            tooltipOpen20: false,
            tooltipOpen30: false,
            tooltipOpen40: false,
            tooltipOpen50: false,
            tooltipOpen60: false,
            tooltipOpen70: false,
            tooltipOpen80: false
        };
    }

    toggle10() {
        this.setState({
            tooltipOpen10: !this.state.tooltipOpen10
        });
    }

    toggle20() {
        this.setState({
            tooltipOpen20: !this.state.tooltipOpen20
        });
    }

    toggle30() {
        this.setState({
            tooltipOpen30: !this.state.tooltipOpen30
        });
    }

    toggle40() {
        this.setState({
            tooltipOpen40: !this.state.tooltipOpen40
        });
    }
    toggle50() {
        this.setState({
            tooltipOpen50: !this.state.tooltipOpen50
        });
    }
    toggle60() {
        this.setState({
            tooltipOpen60: !this.state.tooltipOpen60
        });
    }
    toggle70() {
        this.setState({
            tooltipOpen70: !this.state.tooltipOpen70
        });
    }
    toggle80() {
        this.setState({
            tooltipOpen80: !this.state.tooltipOpen80
        });
    }

    render() {
        return (
            /*--------------------------------------------------------------------------------*/
            /* Used In Dashboard-4 [General]                                                  */
            /*--------------------------------------------------------------------------------*/

            <Card>
                <CardBody>
                    <div className="d-flex align-items-center">
                        <div>
                            <CardTitle>Room Search</CardTitle>
                            <CardSubtitle>Available Rooms</CardSubtitle>
                        </div>
                        <div className="ml-auto d-flex no-block align-items-center">
                            <div className="dl">
                                <Input type="select" className="custom-select">
                                    <option value="0">Today</option>
                                    <option value="1">Tomorrow</option>
                                    <option value="2">Next week</option>
                                    <option value="3">Next Month</option>
                                </Input>
                            </div>
                        </div>
                    </div>
                    <Table className="no-wrap v-middle" responsive>
                        <thead>
                            <tr className="border-0">
                                <th className="border-0">Preview</th>
                                <th className="border-0">Hotel</th>
                                <th className="border-0">Location</th>
                                <th className="border-0">Status</th>
                                <th className="border-0">Size</th>
                                <th className="border-0" >Rating</th>
                                <th className="border-0">Price</th>
                                <th className="border-0"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img src={radissonBluHotelRoomImg} width="100"/></td>
                                <td>
                                    <div className="d-flex no-block align-items-center">
                                        <div className="mr-2"><img src={radissonblu} alt="user" className="rounded-circle" width="45" /></div>
                                        <div className="">
                                            <h5 className="mb-0 font-16 font-medium">Radisson Blu</h5><span>radisson@blu.com</span><h6><span class='notbold'>08-506 540 00</span></h6></div>
                                    </div>
                                </td>
                                <td>Vasagatan 1, 111 20 Stockholm</td>

                                <td>
                                    <i className="fa fa-circle text-orange font-medium" id="tlp1"></i>
                                    <Tooltip placement="top" isOpen={this.state.tooltipOpen10} target="tlp1" toggle={this.toggle10}>
                                        Only 1 room left
                                    </Tooltip>
                                </td>
                                <td>2 bed room</td>
                                <td><Alert color="success">8.7</Alert></td>
                                <td className="blue-grey-text  text-darken-4 font-medium">$34</td>
                                <td><Button className="btn" outline color="primary">Book</Button>{' '}</td>
                            </tr>
                            <tr>
                                <td><img src={hiltonHotelRoomImg} width="100" /></td>
                                <td>
                                    <div className="d-flex no-block align-items-center">
                                        <div className="mr-2"><img src={hilton} alt="user" className="rounded-circle" width="45" /></div>
                                        <div className="">
                                            <h5 className="mb-0 font-16 font-medium">Hilton Hotel</h5><span>hilton@hotel.com</span><h6><span class='notbold'>08-517 353 00</span></h6></div>
                                    </div>
                                </td>
                                <td>Guldgränd 8, 104 65 Stockholm</td>

                                <td>
                                    <i className="fa fa-circle text-success" id="tlp2"></i>
                                    <Tooltip placement="top" isOpen={this.state.tooltipOpen20} target="tlp2" toggle={this.toggle20}>
                                        More then 5 avalable rooms left
                                    </Tooltip>
                                </td>
                                <td>1 bed room</td>
                                <td><Alert color="warning">4.3</Alert></td>
                                <td className="blue-grey-text  text-darken-4 font-medium">$52</td>
                                <td><Button className="btn" outline color="primary">Book</Button>{' '}</td>
                            </tr>
                            <tr>
                                <td><img src={marriottHotelRoomImg} width="100" /></td>
                                <td>
                                    <div className="d-flex no-block align-items-center">
                                        <div className="mr-2"><img src={marriott} alt="user" className="rounded-circle" width="45" /></div>
                                        <div className="">
                                            <h5 className="mb-0 font-16 font-medium">Marriott International</h5><span>marriott@international.com</span><h6><span class='notbold'>08-441 31 00</span></h6></div>
                                    </div>
                                </td>
                                <td>Rålambshovsleden 50, 112 19 Stockholm</td>

                                <td>
                                    <i className="fa fa-circle text-success" id="tlp3"></i>
                                    <Tooltip placement="alert" isOpen={this.state.tooltipOpen30} target="tlp3" toggle={this.toggle30}>
                                        More then 5 avalable rooms left
                                    </Tooltip>
                                </td>
                                <td>3 bed room</td>
                                <td><Alert color="danger">2.1</Alert></td>
                                <td className="blue-grey-text  text-darken-4 font-medium">$26</td>
                                <td><Button className="btn" outline color="primary">Book</Button>{' '}</td>
                            </tr>
                            <tr>
                                <td><img src={sheratonHotelRoomImg} width="100" /></td>
                                <td>
                                    <div className="d-flex no-block align-items-center">
                                        <div className="mr-2"><img src={sheraton} alt="user" className="rounded-circle" width="45" /></div>
                                        <div className="">
                                            <h5 className="mb-0 font-16 font-medium">Sheraton Hotel</h5><span>sheraton@hotel.com</span><h6><span class='notbold'>08-412 34 00</span></h6></div>
                                    </div>
                                </td>
                                <td>Tegelbacken 6, 101 23 Stockholm</td>

                                <td>
                                    <i className="fa fa-circle text-orange" id="tlp4"></i>
                                    <Tooltip placement="top" isOpen={this.state.tooltipOpen40} target="tlp4" toggle={this.toggle40}>
                                        Only 1 room left
                                    </Tooltip>
                                </td>
                                <td>2 bed room</td>
                                <td><Alert color="info">5.7</Alert></td>
                                <td className="blue-grey-text  text-darken-4 font-medium">$47</td>
                                <td><Button className="btn" outline color="primary">Book</Button>{' '}</td>
                            </tr>
                            <tr>
                                <td><img src={radissonBluHotelRoomImg} width="100" /></td>
                                <td>
                                    <div className="d-flex no-block align-items-center">
                                        <div className="mr-2"><img src={radissonblu} alt="user" className="rounded-circle" width="45" /></div>
                                        <div className="">
                                            <h5 className="mb-0 font-16 font-medium">Radisson Blu</h5><span>radisson@blu.com</span><h6><span class='notbold'>08-506 540 00</span></h6></div>
                                    </div>
                                </td>
                                <td>Vasagatan 1, 111 20 Stockholm</td>

                                <td>
                                    <i className="fa fa-circle text-orange font-medium" id="tlp5"></i>
                                    <Tooltip placement="top" isOpen={this.state.tooltipOpen50} target="tlp5" toggle={this.toggle50}>
                                        Only 1 room left
                                    </Tooltip>
                                </td>
                                <td>2 bed room</td>
                                <td><Alert color="success">7.9</Alert></td>
                                <td className="blue-grey-text  text-darken-4 font-medium">$34</td>
                                <td><Button className="btn" outline color="primary">Book</Button>{' '}</td>
                            </tr>
                            <tr>
                                <td><img src={hiltonHotelRoomImg} width="100" /></td>
                                <td>
                                    <div className="d-flex no-block align-items-center">
                                        <div className="mr-2"><img src={hilton} alt="user" className="rounded-circle" width="45" /></div>
                                        <div className="">
                                            <h5 className="mb-0 font-16 font-medium">Hilton Hotel</h5><span>hilton@hotel.com</span><h6><span class='notbold'>08-517 353 00</span></h6></div>
                                    </div>
                                </td>
                                <td>Guldgränd 8, 104 65 Stockholm</td>

                                <td>
                                    <i className="fa fa-circle text-success" id="tlp6"></i>
                                    <Tooltip placement="top" isOpen={this.state.tooltipOpen60} target="tlp6" toggle={this.toggle60}>
                                        More then 5 avalable rooms left
                                    </Tooltip>
                                </td>
                                <td>1 bed room</td>
                                <td><Alert color="success">9.0</Alert></td>
                                <td className="blue-grey-text  text-darken-4 font-medium">$52</td>
                                <td><Button className="btn" outline color="primary">Book</Button>{' '}</td>
                            </tr>
                            <tr>
                                <td><img src={marriottHotelRoomImg} width="100" /></td>
                                <td>
                                    <div className="d-flex no-block align-items-center">
                                        <div className="mr-2"><img src={marriott} alt="user" className="rounded-circle" width="45" /></div>
                                        <div className="">
                                            <h5 className="mb-0 font-16 font-medium">Marriott International</h5><span>marriott@international.com</span><h6><span class='notbold'>08-441 31 00</span></h6></div>
                                    </div>
                                </td>
                                <td>Rålambshovsleden 50, 112 19 Stockholm</td>

                                <td>
                                    <i className="fa fa-circle text-success" id="tlp7"></i>
                                    <Tooltip placement="top" isOpen={this.state.tooltipOpen70} target="tlp7" toggle={this.toggle70}>
                                        More then 5 avalable rooms left
                                    </Tooltip>
                                </td>
                                <td>3 bed room</td>
                                <td><Alert color="warning">3.5</Alert></td>
                                <td className="blue-grey-text  text-darken-4 font-medium">$26</td>
                                <td><Button className="btn" outline color="primary">Book</Button>{' '}</td>
                            </tr>
                            <tr>
                                <td><img src={sheratonHotelRoomImg} width="100" /></td>
                                <td>
                                    <div className="d-flex no-block align-items-center">
                                        <div className="mr-2"><img src={sheraton} alt="user" className="rounded-circle" width="45" /></div>
                                        <div className="">
                                            <h5 className="mb-0 font-16 font-medium">Sheraton Hotel</h5><span>sheraton@hotel.com</span><h6><span class='notbold'>08-412 34 00</span></h6></div>
                                    </div>
                                </td>
                                <td>Tegelbacken 6, 101 23 Stockholm</td>

                                <td>
                                    <i className="fa fa-circle text-orange" id="tlp8"></i>
                                    <Tooltip placement="top" isOpen={this.state.tooltipOpen80} target="tlp8" toggle={this.toggle80}>
                                        Only 1 room left
                                </Tooltip>
                                </td>
                                <td>2 bed room</td>
                                <td><Alert color="info">6.2</Alert></td>
                                <td className="blue-grey-text  text-darken-4 font-medium">$47</td>
                                <td><Button className="btn" outline color="primary">Book</Button>{' '}</td>
                            </tr>
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        );
    }
}

export default HotelRoomComponent;

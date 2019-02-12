import React from "react";

import img1 from 'assets/images/users/1.jpg';
import img2 from 'assets/images/users/2.jpg';
import img3 from 'assets/images/users/3.jpg';
import img4 from 'assets/images/users/4.jpg';

import hilton from 'assets/images/hilton.png';
import radissonblu from 'assets/images/radissonblu.png';
import marriott from 'assets/images/marriott.png';
import sheraton from 'assets/images/sheraton.png';


import {
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
        this.state = {
            tooltipOpen10: false,
            tooltipOpen20: false,
            tooltipOpen30: false,
            tooltipOpen40: false
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
                                <th className="border-0">Hotel</th>
                                <th className="border-0">Location</th>
                                <th className="border-0">Status</th>
                                <th className="border-0">Size</th>
                                <th className="border-0">Budget</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="d-flex no-block align-items-center">
                                        <div className="mr-2"><img src={radissonblu} alt="user" className="rounded-circle" width="45" /></div>
                                        <div className="">
                                            <h5 className="mb-0 font-16 font-medium">Radisson Blu</h5><span>radisson@blu.com</span></div>
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
                                <td className="blue-grey-text  text-darken-4 font-medium">$34</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex no-block align-items-center">
                                        <div className="mr-2"><img src={hilton} alt="user" className="rounded-circle" width="45" /></div>
                                        <div className="">
                                            <h5 className="mb-0 font-16 font-medium">Hilton Hotel</h5><span>hilton@hotel.com</span></div>
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
                                <td className="blue-grey-text  text-darken-4 font-medium">$52</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex no-block align-items-center">
                                        <div className="mr-2"><img src={marriott} alt="user" className="rounded-circle" width="45" /></div>
                                        <div className="">
                                            <h5 className="mb-0 font-16 font-medium">Marriott International</h5><span>marriott@international.com</span></div>
                                    </div>
                                </td>
                                <td>Rålambshovsleden 50, 112 19 Stockholm</td>

                                <td>
                                    <i className="fa fa-circle text-success" id="tlp3"></i>
                                    <Tooltip placement="top" isOpen={this.state.tooltipOpen30} target="tlp3" toggle={this.toggle30}>
                                        More then 5 avalable rooms left
                      </Tooltip>
                                </td>
                                <td>3 bed room</td>
                                <td className="blue-grey-text  text-darken-4 font-medium">$26</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex no-block align-items-center">
                                        <div className="mr-2"><img src={sheraton} alt="user" className="rounded-circle" width="45" /></div>
                                        <div className="">
                                            <h5 className="mb-0 font-16 font-medium">Sheraton Hotel</h5><span>sheraton@hotel.com</span></div>
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
                                <td className="blue-grey-text  text-darken-4 font-medium">$47</td>
                            </tr>
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        );
    }
}

export default HotelRoomComponent;

import React from 'react';
import {
	Nav,
	NavItem,
	Navbar,
	NavbarBrand,
	Collapse,
	DropdownItem,
	Button,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu
} from 'reactstrap';

import profilephoto from '../../assets/images/users/1.jpg';
import logodarkicon from '../../assets/images/logo-icon.png';
import logolighticon from '../../assets/images/logo-light-icon.png';
import logodarktext from '../../assets/images/logo-text.png';
import logolighttext from '../../assets/images/logo-light-text.png';

import opText from '../../assets/images/omegapoint2.png';
import opLogo from '../../assets/images/omegapoint2.png';
import Switch from "react-switch";

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.showMobilemenu = this.showMobilemenu.bind(this);
		this.state = { checked: false };
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			isOpen: false
		};
	}
	handleChange(checked) {
		this.setState({ checked });
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	showMobilemenu() {
		document.getElementById('main-wrapper').classList.toggle('show-sidebar');
	}

	render() {
		return (
			<header className="topbar navbarbg" data-navbarbg="skin1">
				<Navbar className="top-navbar" dark expand="md">
					<div className="navbar-header" id="logobg" data-logobg="skin6">
						<NavbarBrand href="/">
							<b className="logo-icon">
								<img
									src={opLogo}
									width="50%" 
									height="50%"
									alt="homepage"
									className="opLogo-logo"
								/>
							</b>
						</NavbarBrand>
						<a className="nav-toggler d-block d-md-none" onClick={this.showMobilemenu}>
							<i className="ti-menu ti-close" />
						</a>
					</div>
					<Collapse className="navbarbg" isOpen={this.state.isOpen} navbar data-navbarbg="skin1" >
						<Nav className="ml-auto float-right" navbar>
							<span 
								className="ml-auto float-right" 
								style={{ marginTop: '22px', marginRight: '15px', color:'white'}} > 
							</span>
							<label className="ml-auto float-right" htmlFor="normal-switch" style={{ marginTop: '18px', marginRight: '15px' }} >
								<Switch
									checked={this.state.checked}
									onChange={this.handleChange}
									onColor="#86d3ff"
									onHandleColor="#2693e6"
									handleDiameter={30}
									uncheckedIcon={false}
									checkedIcon={false}
									boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
									activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
									height={20}
									width={48}
									className="react-switch"
									id="material-switch"
								/>
							</label>
							<NavItem>
								<a href="" className="btn btn-danger mr-2" style={{ marginTop: '15px' }}>Dark Pattern User Test System</a>
							</NavItem>
							{/*--------------------------------------------------------------------------------*/}
							{/* Start Profile Dropdown                                                         */}
							{/*--------------------------------------------------------------------------------*/}
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret className="pro-pic">
									<img
										src={profilephoto}
										alt="user"
										className="rounded-circle"
										width="31"
									/>
								</DropdownToggle>
								<DropdownMenu right className="user-dd">
									<DropdownItem>
										<i className="ti-user mr-1 ml-1" /> My Account
                  					</DropdownItem>
									<DropdownItem>
										<i className="ti-wallet mr-1 ml-1" /> My Balance
                  					</DropdownItem>
									<DropdownItem>
										<i className="ti-email mr-1 ml-1" /> Inbox
                  					</DropdownItem>
									<DropdownItem divider />
									<DropdownItem>
										<i className="ti-settings mr-1 ml-1" /> Account Settings
                  					</DropdownItem>
									<DropdownItem divider />
									<DropdownItem href="/pages/login">
										<i className="fa fa-power-off mr-1 ml-1" /> Logout
                  					</DropdownItem>
									<DropdownItem divider />
									<Button
										color="success"
										className="btn-rounded ml-3 mb-2 mt-2"> View Profile
                  					</Button>
								</DropdownMenu>
							</UncontrolledDropdown>	
						</Nav>
					</Collapse>
				</Navbar>
			</header>
		);
	}
}
export default Header;

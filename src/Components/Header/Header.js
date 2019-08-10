import React, { Component } from 'react';
import { UserInfo } from '../../Mocks/Http';
import Logo from '../../img/Logo.png';
import Avatar from '../../img/avatar.png';
import './header.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            userInfo: {}
        };
    }
    togolMenu = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    componentDidMount() {
        this.setState({
            userInfo: UserInfo.body.User.profile
        });
    }
    render() {
        const { firstName, lastName } = this.state.userInfo;
        return (
            <nav>
                <div className="logo">
                    <img src={Logo} alt="website logo" />
                </div>

                {/** * Mobile Menu */}
                <div className="hamburger" onClick={this.togolMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                {this.state.isOpen && <ul className="nav-links_mobile">
                    <li><span>Home</span></li>
                    <li className="active"><span>Documents</span></li>
                    <li><span>Contacts</span></li>
                    <li className="divider"><hr /></li>
                    <li><span>{firstName}</span></li>
                    <li><span>{lastName}</span></li>
                </ul>}
                {/** EndOf Mobile Menu */}
                
                <div className="nav-links">
                    <div><span>Home</span></div>
                    <div className="active"><span>Documents</span></div>
                    <div><span>Contacts</span></div>
                    <div><span className="split"></span></div>
                    <div>
                        <img src={Avatar} alt="website logo" />
                    </div>
                    <div className="userInfor">
                        <span>{firstName}</span>
                        <span>{lastName}</span>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;

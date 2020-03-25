import React, { Component } from 'react';
import logo from 'assets/img/passionfood.png';
import logout from 'assets/img/logout.png';
import profile from 'assets/img/Profile.svg';
import { Col } from 'react-bootstrap';

class Header extends Component {
  render() {

    return (
      <div className="header">
        <Col className="left" xs={6} sm={8} md={9} lg={9}>
          <img src={logo} className="logo" alt="passionfood-logo"/>
        </Col>          
        <Col className="right" xs={6} sm={4} md={3} lg={3}>
          <div className="user">
            <p className="username">Haris Salman</p>
            <p className="company">Passion Food</p>
          </div>
          <img src={profile} className="profile" alt="icon-profile"/>
          <img src={logout} className="logout" alt="icon-logout"/>
        </Col>
      </div>
    );
  }
}

export default Header;

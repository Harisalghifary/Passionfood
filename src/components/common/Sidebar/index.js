import React, { Component } from 'react';
import dashboardIcon from 'assets/img/Dashboard icon.svg';

class Sidebar extends Component {
  render() {

    return (
      <div className="sidebar">
        <div className="menu-bar">
          <i className="fas fa-bars fa-2x"></i>
        </div>
        <div className="list-menu">
          <div className="item-menu">
            <img src={dashboardIcon} className="icon" alt="logo"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;

import { withRouter } from 'react-router-dom';
import Header from 'components/common/Header';
import DashboardHeader from 'components/resources/DashboardPage/DashboardHeader';
import FormContainer from 'components/resources/DashboardPage/FormContainer';
import React, { Component } from 'react';
import Sidebar from 'components/common/Sidebar' 

class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topProduct: '',
      anotherProduct:[]
    };
  }

  render() {
    return (
      <>
        <div className="dashboard">
          <Header />
          <div className="detail">
            <Sidebar />
            <div className="content">
              <DashboardHeader/>
              {}
              <div className="resume">
                <FormContainer />
                {}
                {}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(DashboardPage);

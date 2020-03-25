import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DashboardPage from 'scenes/DashboardPage';

const Routes = () => (
  <Router>
    <main className="app__content">
      <Route
        exact
        path="/"
        render={props => <DashboardPage {...props} type="" />}
      />

    </main>
  </Router>
);

export default Routes;

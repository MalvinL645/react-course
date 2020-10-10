/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import './assets/css/App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import routes from './config/routes';

const App = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route) => {
          return (
            <Route
              path={route.path}
              component={route.component}
              key={route.path}
            />
          );
        })}
      </Switch>
    </Router>
  );
};

export default App;

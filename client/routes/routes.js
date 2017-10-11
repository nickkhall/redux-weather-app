import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import store, { history } from '../store';

// Containers
import Main from '../containers/Main';

// Components

const isExact = true;
const isNotExact = false;

const Routes = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact={isExact} component={Main} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default Routes;

import thunk from 'redux-thunk';
import createHashHistory from 'history/createHashHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducers from './reducers';

export const history = createHashHistory();

/* eslint-disable no-underscore-dangle */
const reduxDevToolExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  reduxDevToolExtension && reduxDevToolExtension(),
  applyMiddleware(
    thunk,
    routerMiddleware(history)
  )
  /* eslint-enable */
);

export default store;

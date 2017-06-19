

import React       from 'react';
import { render }  from 'react-dom';
import { Router }  from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { useRouterHistory } from 'react-router';
import routes      from './routes/routes';

import { createStore, combineReducers } from 'redux';
import { Provider }                     from 'react-redux';
import * as reducers                    from './Shared/reducers';
import { fromJS }                       from 'immutable';
import makeRootReducer from './store/reducers';



const history = useRouterHistory(createBrowserHistory)();
let initialState = window.__INITIAL_STATE__;


// Transform into Immutable.js collections,
// but leave top level keys untouched for Redux
Object
  .keys(initialState)
  .forEach(key => {
    initialState[key] = fromJS(initialState[key]);
   });
const reducer = combineReducers(reducers);
const store   = createStore(makeRootReducer, initialState);

render(
	<Provider store={store}>
  		<Router children={routes} history={history} />
  	</Provider>,
  document.getElementById('react-view')
);
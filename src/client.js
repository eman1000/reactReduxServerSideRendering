

import React from "react";
import { render } from "react-dom";
import { Router } from "react-router";
import createBrowserHistory from "history/lib/createBrowserHistory";
import { useRouterHistory } from "react-router";
import routes from "./routes/routes";

import thunk from "redux-thunk";

import { createStore, combineReducers, applyMiddleware, compose} from "redux";
import { Provider } from "react-redux";
import * as reducers from "./reducers";
import { fromJS } from "immutable";
//import makeRootReducer from "./store/reducers";
import logger from "redux-logger";

const log =  logger({ diff: true, collapsed: true });

let middleware = [thunk, log];
const history = useRouterHistory(createBrowserHistory)();

let initialState = window.__INITIAL_STATE__;
// Transform into Immutable.js collections,
// but leave top level keys untouched for Redux

const reducer = combineReducers(reducers);
const store   = createStore(
	reducer,
	initialState,
	        compose(
            applyMiddleware(...middleware)
        )
);
render(
  <Provider store={store}>
      <Router children={routes} history={history} />
  </Provider>,
  document.getElementById('react-view')
);
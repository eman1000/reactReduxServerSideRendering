import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose} from "redux";
import * as reducers from "./reducers";
import { createLogger } from "redux-logger";
import {intlReducer} from "react-intl-redux";
import { routerMiddleware } from "react-router-redux";
import { browserHistory } from "react-router";

const log =  createLogger({ diff: true, collapsed: true });

let middleware = [thunk, log, routerMiddleware(browserHistory)];
let initialState = window.__INITIAL_STATE__;
const reducer = combineReducers({...reducers, intl: intlReducer});
const store   = createStore(
    reducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default store;



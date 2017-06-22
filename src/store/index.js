import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose} from "redux";
import * as reducers from "./reducers";
import logger from "redux-logger";

const log =  logger({ diff: true, collapsed: true });

let middleware = [thunk, log];
let initialState = window.__INITIAL_STATE__;
const reducer = combineReducers(reducers);
const store   = createStore(
    reducer,
    initialState,
    compose(
        applyMiddleware(...middleware)
    )
);

export default store;
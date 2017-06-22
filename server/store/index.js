import {  createStore } from "redux";
import makeRootReducer from "../../src/store/reducers";

export default (initialState = {}, history) => {
    const store = createStore(
        makeRootReducer()
    );
    store.asyncReducers = {};
    return store;
};

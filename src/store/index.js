import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import makeRootReducer from "./reducers";
import logger from "redux-logger";

const log =  logger({ diff: true, collapsed: true });

export default (initialState = {}, history) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  let middleware = [thunk, routerMiddleware(history)];
  if (process.env.NODE_ENV !== "production") {
      middleware.push(log);
  }

  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware)
    )
  );
  store.asyncReducers = {};
  return store;
};

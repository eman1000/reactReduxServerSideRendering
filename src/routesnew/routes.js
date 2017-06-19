/*import React     from "react";
import { Route } from "react-router";
import App from "../AppContainer";
import Home from "./Home";
export default (
    <Route name="app" component={App} path="/">
        <Route component={Home} path="home" />
    </Route>
);
*/
import App from "../AppContainer";
import Home from "./Home";
export const createRoutes = (store) => ({
    path: "/",
    indexRoute: { onEnter: (nextState, replace) => replace("/home") },
    component: App,
    childRoutes: [
        Home(store)
    ]
});

export default createRoutes;
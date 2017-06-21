import React     from "react";
import { Route } from "react-router";
import App from "../AppContainer";
import Home from "./Home/components/Home";
export default (
    <Route name="app" component={App} path="/">
        <Route component={Home} path="home" />
    </Route>
);


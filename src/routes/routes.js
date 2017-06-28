import React     from "react";
import { Route } from "react-router";
import App from "../AppContainer";
import Home from "./Home/container";
import  NotFound from "./NotFound";
export default (
    <Route name="app" component={App} path="/">
        <Route component={Home} path="/:locale/home" />
        <Route component={NotFound} path="*" />
    </Route>
);


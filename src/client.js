import React from "react";
import { render } from "react-dom";
import { Router } from "react-router";
import createBrowserHistory from "history/lib/createBrowserHistory";
import { useRouterHistory } from "react-router";
import routes from "./routes/routes";
import { Provider } from "react-redux";
import store from "./store";

const history = useRouterHistory(createBrowserHistory)();

render(
    <Provider store={store}>
        <Router children={routes} history={history} />
    </Provider>,
  document.getElementById("root")
);
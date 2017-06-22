import express from "express";
import path from "path";
import React                     from "react";
import { renderToString }        from "react-dom/server";
import { RoutingContext, match } from "react-router";
import createLocation            from "history/lib/createLocation";
import routes                    from "../src/routes/routes";
import { createStore, combineReducers } from "redux";
import { Provider }                     from "react-redux";
import * as reducers from "../src/store/reducers";
import axios from "axios";

const app =  express();
app.use("/static",express.static(path.resolve(__dirname, "../public")));
app.get("**/main.js", (req, res)=>{
    res.sendFile(path.resolve(__dirname,"../bin/main.js"));
});
app.get("**/static/:key", (req, res)=>{
    res.sendFile(path.resolve(__dirname,"../bin/", req.params.key));
});
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8081");

    // Request methods you wish to allow
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    // Request headers you wish to allow
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);

    // Pass to next layer of middleware
    next();
});

app.use((req, res, next) => {
    const location = createLocation(req.url);
    const reducer  = combineReducers(reducers);
    const BACKEND_URL = "https://pixabay.com/api/?key=5701538-da0313fec5db349435216f7c3&q=hotels&image_type=photo";
    //const iniState = {home:{page:"Some state from server"}};
        axios.get(BACKEND_URL)
        .then(function (response) {
            const defaultSate = response.data;
            const store = createStore(reducer, {home:{dummyData:defaultSate}});
            match({ routes, location }, (err, redirectLocation, renderProps) => {

                if (err) {
                    console.error(err);
                    return res.status(500).end("Internal server error");
                }
                if (!renderProps){
                    return res.status(404).end("Not found.");
                }
                    const InitialComponent = (
                        <Provider store={store}>
                            <RoutingContext {...renderProps} />
                        </Provider>
                    );
                    const initialState = store.getState();
                    const componentHTML = renderToString(InitialComponent);
                    const HTML = `
                        <!DOCTYPE html>
                        <html>
                            <head>
                                <meta charset="utf-8">
                                <title>Isomorphic Redux Demo</title>
                                <script type="application/javascript">
                                    window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
                                </script>
                            </head>
                            <body>
                                <div id="root">${componentHTML}</div>
                                <script type="application/javascript" src="static/main.js"></script>
                            </body>
                        </html>    
                    `;
                    res.send(HTML);
            });
        })
        .catch(function (error) {
            //console.log(error);
        });
});
app.listen(8081, (err)=>{
    if (err) {
    }
    console.log("app running on port ", 8081);
});
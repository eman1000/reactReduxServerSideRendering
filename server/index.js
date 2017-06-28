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


//Intl messages
import {intlReducer} from "react-intl-redux";
import messages from "../messages";

const app =  express();
app.use("/static",express.static(path.resolve(__dirname, "../public")));
app.get("**/main.js", (req, res)=>{
    res.sendFile(path.resolve(__dirname,"../bin/main.js"));
});
app.get("**/static/:key", (req, res)=>{
    res.sendFile(path.resolve(__dirname,"../bin/", req.params.key));
});
// Add headers
app.all("/", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use((req, res, next) => {
    const location = createLocation(req.url);
    const reducer  = combineReducers({...reducers, intl:intlReducer});
        match({ routes, location }, (err, redirectLocation, renderProps) => {
            // Get the component tree
            const components = renderProps.components;
            // Extract our page component
            const Comp = components[components.length - 1].WrappedComponent;
            console.log(req.query);
            let currentPath = req.url;
            let splitUrl = currentPath.split("/");
            console.log(splitUrl);
            let locale   = messages[splitUrl[1]] ? splitUrl[1] : "en-US";
            let translations = messages[locale];
            // Extract `fetchData` if exists
            const fetchData = Comp && Comp.fetchData ? Comp.fetchData() : Promise.resolve("Could not get data");
            axios.all([fetchData])
            .then(axios.spread(function (response) {
            const defaultSate = response.data;
                const store = createStore(reducer, {
                    home:{
                        dummyData:defaultSate
                    },
                    intl: {
                        locale: locale,
                        messages: translations
                    }
                });
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
                                <title>Isomorphic Redux React</title>
                                <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
                                <script type="application/javascript">
                                    window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
                                    window.__LOCALE__ = ${JSON.stringify(locale)};

                                </script>
                            </head>
                            <body>
                                <div id="root">${componentHTML}</div>
                                <script src="https://cdn.polyfill.io/v1/polyfill.min.js?features=Intl.~locale.en"></script>
                                <script type="application/javascript" src="static/main.js"></script>
                            </body>
                        </html>    
                    `;
                    res.send(HTML);
                }))
                .catch(function (error) {
                    //console.log(error);
                });
        });
});
app.listen(8081, (err)=>{
    if (err) {
    }
    console.log("app running on port ", 8081);
});
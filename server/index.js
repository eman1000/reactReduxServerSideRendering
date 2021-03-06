import express from "express";
import path from "path";
import React                     from "react";
import { renderToString }        from "react-dom/server";
import routes                    from "../src/routes/routes";
import { createStore, combineReducers } from "redux";
import { Provider }                     from "react-redux";
import * as reducers from "../src/store/reducers";
//Api calls package
import axios from "axios";
//Intl messages
import {intlReducer} from "react-intl-redux";
import messages from "../messages";

//App Entry Point
import App from "../src/App";

import { StaticRouter } from "react-router";
import { matchRoutes } from "react-router-config";

//For html head
import {Helmet} from "react-helmet";
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
//const window = typeof window === "undefined" ? "" : window;
const app =  express();
//Mocks

app.all("**/mocks/:key1/:key2/index.json", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "../mocks/", req.params.key1 , req.params.key2 , "./index.json"));
});
app.all("**/mocks/:key1/:key2/index.json", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "../mocks/", req.params.key1 , req.params.key2 , "./index.json"));
});
app.all("**/mocks/:key/index.json", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "../mocks/", req.params.key, "./index.json"));
});

app.all("**/mocks/:key/index.json", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "../mocks/", req.params.key, "./index.json"));
});


app.use("/static",express.static(path.resolve(__dirname, "../public")));
app.get("**/main.js", (req, res)=>{
    res.sendFile(path.resolve(__dirname,"../bin/main.js"));
});
app.get("**/main.css", (req, res)=>{
    res.sendFile(path.resolve(__dirname,"../bin/main.css"));
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

const config = require("../webpack.config.js")[0];

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    hot: true,
  filename: 'main.js',
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));
app.use(webpackHotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000,
}));

const HMR = require("./hmr.js").default;
// Hot Module Reloading
HMR(app);
app.use((req, res, next) => {

        //Langauge
        let currentPath = req.url;
        let splitUrl = currentPath.split("/");
        let locale   = messages[splitUrl[1]] ? splitUrl[1] : "en-US";
        let translations = messages[locale];
        const branch = matchRoutes(routes, req.url);
       //Get default data
        branch.map(({route, location})=> {
            const fetchData =  route.loadData ? route.loadData : Promise.resolve("Nothing to show");
            axios.all([fetchData])
            .then(axios.spread(function (response) {
                const reducer  = combineReducers({...reducers, intl:intlReducer});
                //default state to hydrate the store
                const defaultState = {
                    home:{
                        dummyData:response.data
                    },
                    intl: {
                        locale: locale,
                        messages: translations
                    }
                };
                const store = createStore(reducer, defaultState);
                const context = {};
                const InitialComponent = (
                    <Provider store={store}>
                        <StaticRouter
                            location={req.url}
                            context={context}
                        >
                            <App/>
                        </StaticRouter>
                    </Provider>
                );
                    const initialState = store.getState();
                    const componentHTML = renderToString(InitialComponent);
                    const helmet = Helmet.renderStatic();
                    const HTML = `
                        <!DOCTYPE html>
                        <html>
                            <head>
                                ${helmet.title.toString()}
                                ${helmet.meta.toString()}
                                ${helmet.link.toString()}
                                <meta charset="utf-8">
                                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
                                <link href="static/main.css" rel="stylesheet">
                                <script type="application/javascript">
                                    window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
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
                console.log(error);
            });
        });

   // });
});
app.listen(8081, (err)=>{
    if (err) {
    }
    console.log("app running on port ", 8081);
});
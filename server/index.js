require("babel-core").transform("code", {
  plugins: ["transform-decorators"]
});

var express = require("express");
var path = require("path");

import React                     from 'react';
import { renderToString }        from 'react-dom/server'
import { RoutingContext, match } from 'react-router';
import createLocation            from 'history/lib/createLocation';
import routes                    from '../src/routes/routes';

import { createStore, combineReducers } from 'redux';
import { Provider }                     from 'react-redux';
import * as reducers                    from '../src/Shared/reducers';
import makeRootReducer from '../src/store';


var Component = require("../Component");
var AppContainer = React.createElement("../src/AppContainer");
const app =  express();
app.use("/static",express.static(path.resolve(__dirname, "../public")));
app.get("**/main.js", (req, res)=>{
    res.sendFile(path.resolve(__dirname,"../bin/main.js"));
});
app.get("**/mocks/:key/index.json", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "../mocks/", req.params.key,  "./index.json"));
});
app.get("**/static/:key", (req, res)=>{
    res.sendFile(path.resolve(__dirname,"../bin/", req.params.key));
});


app.use((req, res) => {
  const location = createLocation(req.url);
  const reducer = makeRootReducer;
  const store = createStore(makeRootReducer);
  match({ routes, location }, (err, redirectLocation, renderProps) => {
    if (err) {
      console.error(err);
      return res.status(500).end('Internal server error');
    }
    if (!renderProps) return res.status(404).end('Not found.');
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
            <div id="react-view">${componentHTML}</div>
            <script type="application/javascript" src="static/main.js"></script>
          </body>
      </html>    
    `
    res.send(HTML);
  });
});
/*
app.get("*", (req, res)=>{

    var html = ReactDOMServer.renderToString(
        React.createElement(Component)
    );

    //var reactHtml =  ReactDOMServer.renderToString(Component({}));
    //res.render(path.resolve(__dirname,"../index.html"), {reactOutput: reactHtml});
     res.send(html);
    //res.sendFile(path.resolve(__dirname,"../index.html"));
    //res.sendFile(path.resolve(__dirname,"../index.html"));
});
*/

app.listen(8081, (err)=>{
    if (err) {
    }
    console.log("app running on port ", 8081);
});
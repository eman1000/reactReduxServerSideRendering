var express = require("express");
var path = require("path");
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
app.get("/**", (req, res)=>{
    res.sendFile(path.resolve(__dirname,"../index.html"));
});

app.listen(8081, (err)=>{
    if (err) {
    }
    console.log("app running on port ", 8081);
});
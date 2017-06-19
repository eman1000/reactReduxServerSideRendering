var exec = require("child_process").exec;

var app = exec("babel-node server --presets es2015,stage-2 server NODE_ENV='development'", function (err, stdout, stderr) {
    if (err) {
       console.log(err);
       return;
    }
});
var webpack = exec("webpack --watch", function (err, stdout, stderr) {
    if (err) {
       console.log(err);
       return;
    }
});
app.stdout.on("data", function(data) {
   console.log(data);
});
webpack.stdout.on("data", function(data) {
   console.log(data);
});
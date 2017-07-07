var path = require("path");
var fs = require("fs");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var nodeModules = {};

//We dont want to touch no modules
fs.readdirSync("node_modules")
.filter(function(x) {
    return [".bin"].indexOf(x) === -1;
})
.forEach(function(mod) {
    nodeModules[mod] = "commonjs " + mod;
});



//bundle client
var clientConfig = {
    entry: [
        "./src/client.js",
        "bootstrap-loader",
        "babel-polyfill"
    ],
    output: {
        path: path.resolve(__dirname, "bin"),
        filename: "[name].js?v=[hash]",
        publicPath: "static/"
    },
    externals: {
        fs: fs
    },
    module:{
        loaders : [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: "babel-loader",
                    query: {
                        presets: ["es2015", "react", "stage-0"],
                    }
                },
                {
                    test: /\.json$/,
                    loader: "json-loader"
                },
                {
                    test: /\.scss$/,
                    loaders: [
                        "style-loader",
                        "css-loader?modules&localIdentName=[name]---[local]---[hash:base64:5]",
                        "sass-loader"
                    ]
                },
                {
                    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                    loader: "url-loader?limit=100000"
                }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
};

//bundle server
var serverConfig = {
    entry: [
        "./server/index.js",
    ],
    output: {
        path: path.resolve(__dirname, "bin"),
        filename: "server-output.js?v=[hash]"
    },
    target: "node",
    node: {
        __dirname: true
    },
    externals: nodeModules,
    module:{
        loaders : [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: "babel-loader",
                    query: {
                        presets: ["es2015", "react", "stage-0"],
                    }
                },
                {
                    test: /\.json$/,
                    loader: "json-loader"
                },
                {
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract({
                        loader: [
                            {
                                loader: "css-loader",
                                query: {
                                    localIdentName:"[name]---[local]---[hash:base64:5]",
                                    modules: true
                                }
                            },
                            {
                                loader: "sass-loader"
                            }
                        ]
                    })
                },
                {
                    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                    loader: "url-loader?limit=100000"
                }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin({
            filename: "[name].css",
            allChunks: true
        })
    ],
};

if (process.env.NODE_ENV === "production") {
    clientConfig.plugins = [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": "\"production\""
            }
        })
    ];
    serverConfig.plugins = [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": "\"production\""
            }
        })
    ];
}

else {
    clientConfig.devtool = "source-map";
    serverConfig.devtool = "source-map";
}

module.exports = [clientConfig, serverConfig];
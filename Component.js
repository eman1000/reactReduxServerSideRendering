var React = require('react');

module.exports = React.createClass({
    _handleClick: function() {
        alert();
    },
    render: function() {
        return (
            <html>
            <head>
                <title>Starter Kit</title>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
                <link href='http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css'/>
                <link rel="stylesheet" href="static/css/animations.css"/>
            </head>
            <body>
                <div id="root">
                    <h1>Hello Server Side</h1>
                </div>
                <script src="static/main.js"></script>
            </body>
            </html>
        );
    }
});

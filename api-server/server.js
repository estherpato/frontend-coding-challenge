var express = require('express'),
    app = express(),
    port = process.env.PORT || 3001;
bodyParser = require('body-parser');

//CORS middleware
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(allowCrossDomain);

var routes = require('./routes/routes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('Phone list RESTful API server started on: ' + port);

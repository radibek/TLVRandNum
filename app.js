var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
app.config = require('./config/config');
var api = require('./routes/api');
const errorHandler = require('express-error-handler');



var hbs = require('express-handlebars');
app.set('view engine', 'hbs');
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultView: 'default'
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', api);


app.use(function(req, res, next) {
    return res.status(404).send({ message: 'Not found' });
});
app.use(errorHandler);

module.exports = app;
global.app = app;

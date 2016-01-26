'use strict';

var express = require('express');
var path = require('path');
var routes = require('./routes');
var expressReactView = require('express-react-views');
var app = express();

app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'src'));
app.engine('jsx', expressReactView.createEngine({ beautify: true }));
app.use('/assets', express.static('assets'));

routes(app);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log('Prototype started at port %s', port));

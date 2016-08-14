const path = require('path');
const express = require('express');

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Application = require('./components/shopping-basket-controller.jsx');

const app = express();

app.use('/assets', express.static(path.join(__dirname, './assets')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index', {application: ReactDOMServer.renderToString(React.createElement(Application, null))});
});

module.exports = app;

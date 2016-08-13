const path = require('path');
const express = require('express');
const app = express();

app.use('/assets', express.static(path.join(__dirname, './assets')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
});

module.exports = app;

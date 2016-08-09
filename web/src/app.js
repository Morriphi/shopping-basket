const http = require('http')

const app = http.createServer((req, res) => {
    res.end('<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><title>Shopping Basket</title></head></html>');
});

module.exports = app;

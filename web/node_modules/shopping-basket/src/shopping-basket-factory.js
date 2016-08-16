const products = require('./products');
const basket = require('./shopping-basket');

module.exports = {basket: () => basket(products), products};

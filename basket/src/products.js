const offer = require('./offers');

const _100_PERCENT = () => 0;
const _50_PERCENT = (p) => p / 2;

var products = {
  'butter': {price: 80, offer: offer.none},
  'bread': {price: 100, offer: offer.discountOf(_50_PERCENT).whenBuying(2, 'butter')},
  'milk': {price: 115, offer: offer.discountOf(_100_PERCENT).whenBuying(3, 'milk')}
};

function getPrice (item, basket) {
  return products[item] ? products[item].offer(item, products[item].price, basket) : 0;
}

function map (f) {
  const result = [];
  for (var product in products) {
    result.push(f(product, products[product].price));
  }
  return result;
}

module.exports = {getPrice, map};
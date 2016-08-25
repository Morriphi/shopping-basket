const offer = require('./offers');

const _100_PERCENT = () => 0;
const _50_PERCENT = (p) => p / 2;

var products = {
  'butter': {price: 80, offers: offer.none},
  'orange': {price: 60, offers: offer.none},
  'bread': {price: 100, offers: offer.discountOf(_50_PERCENT).whenBuying(2, 'butter').or()
    .discountOf(_100_PERCENT).whenBuying(2, 'orange').build()},
  'milk': {price: 115, offers: offer.discountOf(_100_PERCENT).whenBuying(3, 'milk').build()}
};

function getPrice (item, basket) {
  if (products[item]) {
    const prices = [];

    for (const offer of products[item].offers) {
      if (offer.isApplicable(item, basket)) {
        prices.push(offer.useOffer(item, products[item].price, basket));
      }
    }

    return Math.min.apply(null, prices);
  } else {
    return 0;
  }
}

function map (f) {
  const result = [];
  for (var product in products) {
    result.push(f(product, products[product].price));
  }
  return result;
}

module.exports = {getPrice, map};

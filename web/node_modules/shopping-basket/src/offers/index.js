const eligibleDiscounts = require('./discounts');

function discountOf (unitPriceAfterDiscount) {
  return builder(unitPriceAfterDiscount);
}

const none = {isApplicable: (basket) => true, useOffer: (item, price, basket) => price * basket[item].qty};

function builder (unitPriceAfterDiscount) {
  const obj = {};

  const offers = [];
  const discounts = [unitPriceAfterDiscount];

  obj.discountOf = (unitPriceAfterDiscount) => {
    discounts.push(unitPriceAfterDiscount);
    return obj;
  };

  obj.whenBuying = (quantity, product) => {
    offers.push({
      isApplicable: (item, basket) => eligibleDiscounts(quantity, product, item, basket).available(),
      useOffer: priceCalculator.bind(null, discounts[offers.length], quantity, product)});
    return obj;
  };

  obj.or = () => obj;

  obj.build = () => {
    offers.push(none);
    return offers;
  };

  return obj;
}

module.exports = {none: [none], discountOf};

function priceCalculator (unitPriceAfterDiscount, eligibleQuantity, eligibleProduct, item, price, basket) {
  let discounts = eligibleDiscounts(eligibleQuantity, eligibleProduct, item, basket);

  let totalPrice = 0;

  for (var i = 0; i < basket[item].qty; i++) {
    if (discounts.available()) {
      totalPrice += unitPriceAfterDiscount(price);
      discounts.use();
    } else {
      totalPrice += price;
    }
  }

  return totalPrice;
}

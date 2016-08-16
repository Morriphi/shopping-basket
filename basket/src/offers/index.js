const eligibleDiscounts = require('./discounts');

module.exports = {none: (item, price, basket) => price * basket[item].qty, discountOf};

function discountOf (unitPriceAfterDiscount) {
  return {
    whenBuying (quantity, product) {
      return priceCalculator.bind(null, quantity, product);
    }
  };

  function priceCalculator (eligibleQuantity, eligibleProduct, item, price, basket) {
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
}

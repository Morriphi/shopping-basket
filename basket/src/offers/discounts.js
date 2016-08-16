module.exports = (eligibleQuantity, eligibleProduct, item, basket) => {
  let discounts = 0;

  if (eligibleProduct === item) {
    discounts = Math.floor(basket[item].qty / eligibleQuantity);
  } else if (basket[eligibleProduct]) {
    discounts = Math.ceil(basket[eligibleProduct].qty / eligibleQuantity);
  }

  return {available: () => discounts > 0, use: () => discounts--};
};

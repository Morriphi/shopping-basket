module.exports = (products) => {
  const obj = {};
  const basket = {};

  obj.add = (item) => {
    if (!basket[item]) {
      basket[item] = {qty: 0};
    }
    basket[item].qty++;
  };

  obj.total = () => {
    let t = 0;
    for (var item in basket) {
      t += products.getPrice(item, basket);
    }
    return t;
  };

  return obj;
};

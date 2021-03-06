module.exports = (products) => {
  const obj = {};
  const basket = {};

  obj.add = (item) => {
    if (!basket[item]) {
      basket[item] = {qty: 0};
    }
    basket[item].qty++;
  };

  obj.remove = item => {
    if (basket[item] && basket[item].qty > 0) {
      basket[item].qty--;
    }
  };

  obj.map = (f) => {
    const result = [];
    for (var item in basket) {
      result.push(f(item, basket[item].qty));
    }
    return result;
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

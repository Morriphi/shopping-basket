/* global it, describe, beforeEach */

const expect = require('must');
const products = require('./../src/products');
const shoppingBasket = require('./../src/shopping-basket');

describe('Shopping basket', () => {
  let basket;

  beforeEach(() => {
    basket = shoppingBasket(products);
  });

  it('adding invalid item should do nothing', () => {
    add(1, 'invalid');
    add(1, null);
    add(1, undefined);

    totalShouldBe(0);
  });

  it('empty basket costs nothing', () => {
    totalShouldBe(0);
  });

  it('butter costs £0.80', () => {
    add(1, 'butter');

    totalShouldBe(80);
  });

  it('milk costs £1.15', () => {
    add(1, 'milk');

    totalShouldBe(115);
  });

  it('two milk costs £2.30', () => {
    add(2, 'milk');

    totalShouldBe(230);
  });

  it('bread costs £1.00', () => {
    add(1, 'bread');

    totalShouldBe(100);
  });

  it('butter costs £0.80', () => {
    add(1, 'butter');

    totalShouldBe(80);
  });

  it('butter and milk cost £1.95', () => {
    basket.add('butter');
    basket.add('milk');

    totalShouldBe(195);
  });

  it('bread, butter and milk cost £2.95', () => {
    basket.add('bread');
    basket.add('butter');
    basket.add('milk');

    totalShouldBe(295);
  });

  describe('offers', () => {
    it('buy 2 butter and get a bread at 50% off', () => {
      add(2, 'butter');
      add(1, 'bread');

      totalShouldBe(210);
    });

    it('buy 2 butter and get a bread at 50% off in reverse order', () => {
      add(1, 'bread');
      add(2, 'butter');

      totalShouldBe(210);
    });

    it('buy 3 butter and get a bread cost £2.90', () => {
      add(3, 'butter');
      add(1, 'bread');

      totalShouldBe(290);
    });

    it('buy 4 butter and get 2 bread both at 50% off', () => {
      add(2, 'butter');
      add(1, 'bread');
      add(2, 'butter');
      add(1, 'bread');

      totalShouldBe(420);
    });

    it('buy 3 milk get 4th milk free', () => {
      add(4, 'milk');

      totalShouldBe(345);
    });

    it('buy 6 milk get 7th and 8th milk free', () => {
      add(8, 'milk');

      totalShouldBe(690);
    });
  });

  function totalShouldBe (expected) {
    expect(basket.total()).to.equal(expected);
  }

  function add (qty, item) {
    for (let i = 0; i < qty; i++) {
      basket.add(item);
    }
  }
});

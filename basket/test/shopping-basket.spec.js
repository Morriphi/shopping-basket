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

  it('oranges cost £0.60', () => {
    add(1, 'orange');

    totalShouldBe(60);
  });

  it('can remove items', () => {
    add(1, 'butter');
    remove(1, 'butter');

    totalShouldBe(0);
  });

  it('cannot remove more items than added', () => {
    add(1, 'butter');
    remove(2, 'butter');

    totalShouldBe(0);
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

  function totalShouldBe (expected) {
    expect(basket.total()).to.equal(expected);
  }

  function add (qty, item) {
    for (let i = 0; i < qty; i++) {
      basket.add(item);
    }
  }

  function remove (qty, item) {
    for (let i = 0; i < qty; i++) {
      basket.remove(item);
    }
  }
});

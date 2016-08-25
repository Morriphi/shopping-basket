/* global it, describe, beforeEach */

const expect = require('must');
const products = require('./../src/products');
const shoppingBasket = require('./../src/shopping-basket');

describe('Offers', () => {
  let basket;

  beforeEach(() => {
    basket = shoppingBasket(products);
  });

  it('buy 2 butter and get a bread at 50% off', () => {
    add(2, 'butter');
    add(1, 'bread');

    totalShouldBe(210);
  });

  it('buy 2 oranges and get bread free', () => {
    add(2, 'orange');
    add(1, 'bread');

    totalShouldBe(120);
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

  describe('given two offers', () => {
    describe('buy 2 butter and get a bread at 50% off', () => {
      describe('buy 2 oranges and get bread free', () => {
        it('should use the offer with the greatest discount', () => {
          add(2, 'butter');
          add(2, 'orange');
          add(1, 'bread');

          totalShouldBe(280);
        });
      });
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


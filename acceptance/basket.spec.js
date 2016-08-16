/* global beforeEach, it, describe */

const Browser = require('zombie');

describe('Shopping basket', () => {
  const browser = new Browser();

  beforeEach((done) => {
    browser.visit('http://web/', done);
  });

  it('1 butter, 1 bread and 1 milk should cost £2.95', () => {
    add(1, 'butter');
    add(1, 'bread');
    add(1, 'milk');

    totalShouldBe('£2.95');
  });

  it('2 butter and 2 bread should cost £3.10', () => {
    add(2, 'butter');
    add(2, 'bread');

    totalShouldBe('£3.10');
  });

  it('4 milk should cost £3.45', () => {
    add(4, 'milk');

    totalShouldBe('£3.45');
  });

  it('2 butter, 1 bread and 8 milk should cost £9.00', () => {
    add(2, 'butter');
    add(1, 'bread');
    add(8, 'milk');

    totalShouldBe('£9.00');
  });

  function add (qty, item) {
    for (var i = 0; i < qty; i++) {
      browser.pressButton(`.btn-add-${item}-to-basket`);
    }
  }

  function totalShouldBe (total) {
    browser.assert.text('.total', 'Total: ' + total);
  }
});

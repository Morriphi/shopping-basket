/* global before, it, describe */

const Browser = require('zombie');

describe('User visiting the shopping basket page', () => {
  const browser = new Browser();

  before((done) => {
    browser.visit('http://web/', done);
  });

  it('should see the page title', (done) => {
    browser.assert.text('title', 'Shopping Cart Kata');
    done();
  });

  it('should see heading', (done) => {
    browser.assert.text('h1', 'Shopping Cart Kata');
    done();
  });
});

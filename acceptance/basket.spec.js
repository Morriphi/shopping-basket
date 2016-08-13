/* global before, it, describe */

const Browser = require('zombie');
const expect = require('chai').expect;

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

  it('should load styles', (done) => {
    browser.assert.attribute('link', 'href', 'assets/bootstrap/css/bootstrap.min.css');

    browser.fetch('assets/bootstrap/css/bootstrap.min.css').then((response) => {
      expect(response.status).to.equal(200);
      done();
    });
  });
});

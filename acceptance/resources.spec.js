/* global before, it, describe */

const Browser = require('zombie');
const expect = require('chai').expect;

describe('loading page', () => {
  const browser = new Browser();

  before((done) => {
    browser.visit('http://web/', done);
  });

  it('loads styles', (done) => {
    browser.assert.attribute('link', 'href', 'assets/bootstrap/css/bootstrap.min.css');

    browser.fetch('assets/bootstrap/css/bootstrap.min.css').then((response) => {
      expect(response.status).to.equal(200);
      done();
    });
  });

  it('loads javascript', (done) => {
    expect(browser.resources.length).to.equal(2);
    browser.resources.forEach(resource => {
      if (resource.url === 'http://web/assets/js/bundle.js') {
        expect(resource.response.status).to.equal(200);
        done();
      }
    });
  });
});


const Browser = require('zombie');

describe('User visiting the shopping basket page', () => {
    const browser = new Browser();

    it('should see the page title', (done) => {
        browser.visit('http://web/', () => {
            browser.assert.text('title', 'Shopping Basket');
            done();
        });
    });
});

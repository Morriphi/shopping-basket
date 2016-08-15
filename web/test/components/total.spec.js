/* global it, describe */

const React = require('react');
const expect = require('chai').expect;
const render = require('enzyme').render;
const Total = require('../../src/components/total');

describe('Total', () => {
  it('should not wrap', () => {
    expect(render(<Total />).find('.row').find('.col-md-12').find('h2').hasClass('text-nowrap')).to.equal(true);
  });

  it('should align right', () => {
    expect(render(<Total />).find('.row').find('.col-md-12').find('h2').hasClass('text-right')).to.equal(true);
  });

  it('renders the total in heading across a 12 column row', () => {
    expect(render(<Total value={360} />).find('.row').find('.col-md-12').find('h2').text()).to.equal('Total: £3.60');
    expect(render(<Total value={420} />).find('.row').find('.col-md-12').find('h2').text()).to.equal('Total: £4.20');
  });
});


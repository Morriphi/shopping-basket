/* global it, describe */

const React = require('react');
const expect = require('chai').expect;
const shallow = require('enzyme').shallow;
const Divider = require('../../src/components/divider');

describe('Divider', () => {
  it('renders a horizontal rule across a 12 column row', () => {
    const component = shallow(<Divider />);
    expect(component.find('.row').find('.col-md-12').contains(<hr />)).to.equal(true);
  });
});

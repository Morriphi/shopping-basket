/* global it, describe */

const React = require('react');
const expect = require('chai').expect;
const shallow = require('enzyme').shallow;
const DeleteButton = require('../../src/components/delete-button');

describe('Delete button', () => {
  it('should have target selector', () => {
    const component = shallow(<DeleteButton target='product' />);
    expect(component.find('button').hasClass('btn-remove-product-from-basket')).to.equal(true);
  });

  it('should be styled', () => {
    const component = shallow(<DeleteButton />);
    expect(component.find('button').hasClass('btn')).to.equal(true);
    expect(component.find('button').hasClass('btn-danger')).to.equal(true);
    expect(component.find('button').hasClass('btn-lg')).to.equal(true);
  });

  it('should have trash icon', () => {
    const component = shallow(<DeleteButton />);
    expect(component.find('button').find('i').hasClass('glyphicon')).to.equal(true);
    expect(component.find('button').find('i').hasClass('glyphicon-trash')).to.equal(true);
  });

  it('handles click', (done) => {
    const handler = () => { done(); };
    const component = shallow(<DeleteButton onClick={handler} />);
    component.find('button').simulate('click');
  });
});

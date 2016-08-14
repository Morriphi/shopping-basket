/* global it, describe */

const React = require('react');
const expect = require('chai').expect;
const shallow = require('enzyme').shallow;
const DeleteButton = require('../../src/components/delete-button');

describe('Delete button', () => {
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
});

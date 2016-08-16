/* global it, describe */

const React = require('react');
const expect = require('chai').expect;
const mount = require('enzyme').mount;
const shallow = require('enzyme').shallow;
const Item = require('../../src/components/basket-item');

const jsdom = require('jsdom');
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

describe('Basket Item', () => {
  it('render in a three column row', () => {
    const component = shallow(<Item />);
    expect(component.find('div').first().hasClass('row')).to.equal(true);
    expect(component.find('.row').childAt(0).hasClass('col-md-6')).to.equal(true);
    expect(component.find('.row').childAt(1).hasClass('col-md-4')).to.equal(true);
    expect(component.find('.row').childAt(2).hasClass('col-md-2')).to.equal / (true);
  });

  it('renders item name in first column', () => {
    expect(shallow(<Item name='product 1' />).find('.col-md-6').find('h3').text()).to.equal('Product 1');
    expect(shallow(<Item name='product 2' />).find('.col-md-6').find('h3').text()).to.equal('Product 2');
  });

  it('renders item quantity in second column', () => {
    expect(shallow(<Item quantity={1} />).find('.col-md-4').find('h3').text()).to.equal('1');
    expect(shallow(<Item quantity={3} />).find('.col-md-4').find('h3').text()).to.equal('3');
  });

  it('handles removing a product', (done) => {
    const handler = (name) => {
      expect(name).to.equal('product');
      done();
    };
    const component = mount(<Item name='product' onRemove={handler} />);
    component.find('.btn-remove-product-from-basket').simulate('click');
  });
});

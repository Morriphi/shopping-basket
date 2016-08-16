/* global it, describe */

const React = require('react');
const expect = require('chai').expect;
const mount = require('enzyme').mount;
const render = require('enzyme').render;
const shallow = require('enzyme').shallow;
const Product = require('../../src/components/product');

const jsdom = require('jsdom');
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

describe('Product', () => {
  it('render in a three column row', () => {
    const component = shallow(<Product />);
    expect(component.find('div').first().hasClass('row')).to.equal(true);
    expect(component.find('.row').childAt(0).hasClass('col-md-6')).to.equal(true);
    expect(component.find('.row').childAt(1).hasClass('col-md-4')).to.equal(true);
    expect(component.find('.row').childAt(2).hasClass('col-md-2')).to.equal / (true);
  });

  it('renders product name in first column', () => {
    expect(render(<Product name='product 1' />).find('.col-md-6').find('h3').text()).to.equal('Product 1');
    expect(render(<Product name='product 2' />).find('.col-md-6').find('h3').text()).to.equal('Product 2');
  });

  it('renders product price in second column', () => {
    expect(render(<Product price={80} />).find('.col-md-4').find('h3').text()).to.equal('£0.80');
    expect(render(<Product price={120} />).find('.col-md-4').find('h3').text()).to.equal('£1.20');
  });

  it('handles adding a product', (done) => {
    const handler = (name) => {
      expect(name).to.equal('product');
      done();
    };
    const component = mount(<Product name='product' onAdd={handler} />);
    component.find('.btn-add-product-to-basket').simulate('click');
  });
});

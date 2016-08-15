const React = require('react');
const Product = require('./product');
const Divider = require('./divider');
const BasketItem = require('./basket-item');

const Application = React.createClass({
  render () {
    return (<div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='page-header'>
            <h1>Shopping Cart Kata</h1>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <h2><i className='glyphicon glyphicon-apple'></i> Products</h2>
          <Product name='Milk' price={80} />
          <Divider />
          <Product name='Bread' price={140} />
          <Divider />
          <Product name='Butter' price={200} />
        </div>
        <div className='col-md-6'>
          <h2 className='text-left'><i className='glyphicon glyphicon-shopping-cart'></i> Basket</h2>
          <BasketItem name='Milk' quantity={1} />
          <Divider />
          <BasketItem name='Butter' quantity={2} />
        </div>
      </div>
      <Divider />
      <div className='row'>
        <div className='col-md-12'>
          <h2 className='text-nowrap text-right'>Total: £1.95</h2></div>
      </div>
    </div>);
  }
});

module.exports = Application;

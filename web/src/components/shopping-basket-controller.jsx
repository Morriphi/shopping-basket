const React = require('react');
const Total = require('./total');
const Product = require('./product');
const Divider = require('./divider');
const Basket = require('shopping-basket');
const BasketItem = require('./basket-item');

const Application = React.createClass({
  getInitialState () {
    return {
      basket: Basket.basket()
    };
  },
  handleAdd (name) {
    const basket = this.state.basket;
    basket.add(name);
    this.setState({basket});
    this.forceUpdate();
  },
  handleRemove (name) {
    const basket = this.state.basket;
    basket.remove(name);
    this.setState({basket});
    this.forceUpdate();
  },
  render () {
    const renderedProducts = Basket.products.map((name, price) => {
      return <ProductWithDivider key={`product_${name}`} name={name} price={price} onAdd={this.handleAdd} />;
    });

    const renderedBasket = this.state.basket.map((name, quantity) => {
      return <BasketItemWithDivider key={`item_${name}`} name={name} quantity={quantity} onRemove={this.handleRemove} />;
    });

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
          {renderedProducts}
        </div>
        <div className='col-md-6'>
          <h2 className='text-left'><i className='glyphicon glyphicon-shopping-cart'></i> Basket</h2>
          {renderedBasket}
        </div>
      </div>
      <Divider />
      <Total value={this.state.basket.total()} />
    </div>);
  }
});

const ProductWithDivider = (props) => (
  <span>
    <Product {... props} />
    <Divider />
  </span>);

const BasketItemWithDivider = (props) => (
  <span>
    <BasketItem {... props} />
    <Divider />
  </span>);

module.exports = Application;

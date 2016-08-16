const React = require('react');
const AddButton = require('./add-button');
const Currency = require('react-currency');
const humanize = require('string-humanize');

const Product = React.createClass({
  getDefaultProps () {
    return {
      onAdd () {}
    };
  },

  render () {
    return (<div className='row'>
      <div className='col-md-6'>
        <h3>{humanize(this.props.name)}</h3></div>
      <div className='col-md-4'>
        <h3><Currency symbol='£' value={this.props.price} /></h3></div>
      <div className='col-md-2'>
        <AddButton target={this.props.name}
          onClick={this.props.onAdd.bind(null, this.props.name)} />
      </div>
    </div>);
  }
});

module.exports = Product;

const React = require('react');
const humanize = require('string-humanize');
const DeleteButton = require('./delete-button');

const BasketItem = React.createClass({
  getDefaultProps () {
    return {
      onRemove () {}
    };
  },

  render () {
    return (<div className='row'>
      <div className='col-md-6'>
        <h3>{humanize(this.props.name)}</h3></div>
      <div className='col-md-4'>
        <h3>{this.props.quantity}</h3></div>
      <div className='col-md-2'>
        <DeleteButton target={this.props.name}
          onClick={this.props.onRemove.bind(null, this.props.name)} />
      </div>
    </div>);
  }
});

module.exports = BasketItem;

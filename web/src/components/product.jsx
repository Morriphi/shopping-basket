const React = require('react');
const AddButton = require('./add-button');
const Currency = require('react-currency');
const humanize = require('string-humanize');

module.exports = (props) => (<div className='row'>
  <div className='col-md-6'>
    <h3>{humanize(props.name)}</h3></div>
  <div className='col-md-4'>
    <h3><Currency symbol='£' value={props.price} /></h3></div>
  <div className='col-md-2'>
    <AddButton />
  </div>
</div>);

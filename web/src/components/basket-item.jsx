const React = require('react');
const humanize = require('string-humanize');
const DeleteButton = require('./delete-button');

module.exports = (props) => (<div className='row'>
  <div className='col-md-6'>
    <h3>{humanize(props.name)}</h3></div>
  <div className='col-md-4'>
    <h3>{props.quantity}</h3></div>
  <div className='col-md-2'>
    <DeleteButton />
  </div>
</div>);

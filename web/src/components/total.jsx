const React = require('react');
const Currency = require('react-currency');

module.exports = (props) => (<div className='row'>
  <div className='col-md-12'>
    <h2 className='text-nowrap text-right'>Total: <Currency symbol='£' value={props.value} /></h2></div>
</div>);

const React = require('react');

module.exports = (props) => (<button className={`btn btn-primary btn-lg btn-add-${props.target}-to-basket`} type='button' {... props}>
  <i className='glyphicon glyphicon-shopping-cart'></i>
</button>);

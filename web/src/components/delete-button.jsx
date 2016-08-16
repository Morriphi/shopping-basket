const React = require('react');

module.exports = (props) => (<button className={`btn btn-danger btn-lg btn-remove-${props.target}-from-basket`} type='button' {... props}>
  <i className='glyphicon glyphicon-trash'></i>
</button>);

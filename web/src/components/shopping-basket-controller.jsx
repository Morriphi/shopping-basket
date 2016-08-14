const React = require('react');

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
          <div className='row'>
            <div className='col-md-6'>
              <h3>Milk </h3></div>
            <div className='col-md-4'>
              <h3>£1.95 </h3></div>
            <div className='col-md-2'>
              <button className='btn btn-primary btn-lg' type='button'><i
                className='glyphicon glyphicon-shopping-cart'></i></button>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <hr />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <h3>Bread</h3></div>
            <div className='col-md-4'>
              <h3>£0.80</h3></div>
            <div className='col-md-2'>
              <button className='btn btn-primary btn-lg' type='button'><i
                className='glyphicon glyphicon-shopping-cart'></i></button>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <hr />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <h3>Butter </h3></div>
            <div className='col-md-4'>
              <h3>£1.20 </h3></div>
            <div className='col-md-2'>
              <button className='btn btn-primary btn-lg' type='button'><i
                className='glyphicon glyphicon-shopping-cart'></i></button>
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <h2 className='text-left'><i className='glyphicon glyphicon-shopping-cart'></i> Basket</h2>
          <div className='row'>
            <div className='col-md-6'>
              <h3>Milk </h3></div>
            <div className='col-md-4'>
              <h3>1 </h3></div>
            <div className='col-md-2'>
              <button className='btn btn-danger btn-lg' type='button'><i className='glyphicon glyphicon-trash'></i>
              </button>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <hr />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <h3>Butter </h3></div>
            <div className='col-md-4'>
              <h3>2 </h3></div>
            <div className='col-md-2'>
              <button className='btn btn-danger btn-lg' type='button'><i className='glyphicon glyphicon-trash'></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <hr />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <h2 className='text-nowrap text-right'>Total: £1.95</h2></div>
      </div>
    </div>);
  }
});

module.exports = Application;

global.__REACT_DEVTOOLS_GLOBAL_HOOK__ = {}; // prevent react DevTools log

const React = require('react');
const ReactDOM = require('react-dom');
const Application = require('../components/shopping-basket-controller');

ReactDOM.render(<Application />, document.getElementById('app'));


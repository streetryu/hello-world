import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return '<h1>Hello world</h1>';
  }
}

ReactDOM.render(
	'<MyComponentClass />', 
	document.getElementById('app')
);

const myObject = '<h1>my object</h1>';
ReactDOM.render(
	'<myObject />', 
	document.getElementById('app2')
);

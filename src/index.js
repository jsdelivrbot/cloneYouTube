import React from 'react';
import ReactDOM from 'react-dom';
// Create a new component.  this component should produce
// some HTML
const App = function() {
  //JSX is html like code that you can use in javascript
  // webpack and babel convert the JSX into real javascript
  // it also converts it into html and puts it into the dom
  return <div>Hi!</div>;
}

// Take this component's generated HTML and put it on
// the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

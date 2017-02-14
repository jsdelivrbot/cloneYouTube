import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCOk_DQYkfpV77coADf0oI-F1rRMW2UICY';
// Create a new component.  this component should produce
// some HTML
const App = () => {
  //JSX is html like code that you can use in javascript
  // webpack and babel convert the JSX into real javascript
  // it also converts it into html and puts it into the dom
  return (
    <div>
      Hi!
      <SearchBar />
    </div>
  );

}

// Take this component's generated HTML and put it on
// the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  render() {
    return <input onChange={event => this.setState({term: event.target.value})} />;
  }


}

export default SearchBar;

/*
turn this functional component into a class component

const SearchBar = () => {
  return <input />
}

cut the following function and added an arrow function

onInputChange(event)  {
  console.log(event.target.value);
}

and the calling function
{this.onInputChange}

*/

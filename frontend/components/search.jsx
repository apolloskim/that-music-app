import React from 'react';
import Navbar from './navbar/navbar';

class Search extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-container">
        <Navbar />
      </div>
    );
  }
}

export default Search;

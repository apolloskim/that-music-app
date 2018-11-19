import React from 'react';
import Navbar from './navbar/navbar';
import PlaybarContainer from './playbar-container';

class Search extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-container">
        <Navbar />

        <PlaybarContainer/>
      </div>
    );
  }
}

export default Search;

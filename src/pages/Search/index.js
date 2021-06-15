import React, { useContext, useState } from 'react'
import MoviesContext from '../../Context/MoviesContext';

import './style.css'

function Search() {
  const { showSearch } = useContext(MoviesContext);
  const searchClass = showSearch
    ? "search search-display-block"
    : "search search-display-none";

  const [searchMovie, setSearchMovie] = useState('');

  const handleSearch = ({ target }) => {
    setSearchMovie(target.value);
  }

  return (
    <div className={searchClass}>
      <div className="search-content">
        <input
          type="text"
          onChange={(event) => handleSearch(event)}
        />

      </div>
    </div>
  )
};

export default Search;
import React, { useContext, useState } from 'react'
import MoviesContext from '../../Context/MoviesContext';
import { searchMovies } from '../../services/tmdbAPI';
import MovieCardSearch from './MovieCardSearch';

import './style.css'

function Search() {
  const { showSearch } = useContext(MoviesContext);
  const searchClass = showSearch
    ? "search search-display-block"
    : "search search-display-none";

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSearch = async ({ target }) => {
    setLoading(true);
    if (target.value.length > 3) {
      const response = await searchMovies(target.value);
      setMovies(response);
      setLoading(false);
    }
  }

  if (!showSearch) return null;

  return (
    <div className={searchClass}>
      <div className="search-content">
        <input
          type="text"
          className="search-input"
          onChange={(event) => handleSearch(event)}
        />
        {!loading && (
          <div className="search-results">
            {movies.map((movie, index) => <MovieCardSearch key={index} movie={movie} />)}
          </div>
        )}

      </div>
    </div>
  )
};

export default Search;
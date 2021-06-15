import React, { useContext, useEffect, useState } from 'react'
import MoviesContext from '../../Context/MoviesContext';
import { searchMovies } from '../../services/tmdbAPI';
import MovieCardSearch from './MovieCardSearch';

import './style.css'

function Search() {
  const { showSearch } = useContext(MoviesContext);
  const searchClass = showSearch
    ? "search search-display-block"
    : "search search-display-none";

  const [searchKeyword, setSearchKeyword] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = ({ target }) => {
    if (target.value.length > 3)
      setSearchKeyword(target.value);
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await searchMovies(searchKeyword);
      setMovies(response);
    };
    fetchMovies();
  }, [searchKeyword]);

  return (
    <div className={searchClass}>
      <div className="search-content">
        <input
          type="text"
          className="search-input"
          onChange={(event) => handleSearch(event)}
        />
        <div className="search-results">
          {movies.map((movie, index) => <MovieCardSearch key={index} movie={movie} />)}
        </div>
      </div>
    </div>
  )
};

export default Search;
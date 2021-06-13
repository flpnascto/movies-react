import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MoviesContext from '../Context/MoviesContext';
import { getMovies } from '../services/tmdbAPI';

function Provider({ children }) {
  const [catalogPage, setCatalogPage] = useState(1);
  const [filterGenreId, setFilterGenreId] = useState('');
  const [filterPopularity, setFilterPopularity] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const movies = await getMovies(catalogPage, filterGenreId, filterPopularity);
      setMovies(movies);
    };
    fetchMovies();
  }, [catalogPage, filterGenreId, filterPopularity]);


  const contextValue = {
    catalogPage,
    setCatalogPage,
    filterGenreId,
    setFilterGenreId,
    filterPopularity,
    setFilterPopularity,
    movies,
  }

  return (
    <MoviesContext.Provider value={contextValue} >
      {children}
    </MoviesContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MoviesContext from '../Context/MoviesContext';
import { getMovies, getGenresList } from '../services/tmdbAPI';

function Provider({ children }) {
  const [catalogPage, setCatalogPage] = useState(1);
  const [filterGenreId, setFilterGenreId] = useState('');
  const [filterPopularity, setFilterPopularity] = useState(false);
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [viewType, setViewType] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      const movies = await getMovies(catalogPage, filterGenreId, filterPopularity);
      setMovies(movies);
    };
    fetchMovies();
  }, [catalogPage, filterGenreId, filterPopularity]);

  useEffect(() => {
    async function fetchGenres() {
      const genresList = await getGenresList();
      setGenres(genresList);
    };
    fetchGenres();
  }, []);

  const contextValue = {
    catalogPage,
    setCatalogPage,
    filterGenreId,
    setFilterGenreId,
    filterPopularity,
    setFilterPopularity,
    movies,
    genres,
    viewType,
    setViewType,
    showSearch,
    setShowSearch,
  };

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

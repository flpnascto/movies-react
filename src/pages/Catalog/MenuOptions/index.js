import React, { useContext, useEffect, useState } from 'react';
import MoviesContext from '../../../Context/MoviesContext';
import { getGenresList } from '../../../services/tmdbAPI';

import './style.css';

function MenuOptions({ viewSelect }) {
  const [loading, setLoading] = useState(false);
  const [genreList, setGenreList] = useState([]);
  const {
    filterGenreId,
    setFilterGenreId,
    filterPopularity,
    setFilterPopularity,
    viewType,
    setViewType,
  } = useContext(MoviesContext);

  useEffect(() => {
    setLoading(true);
    async function fetchGenreList() {
      const response = await getGenresList();
      setGenreList(response);
      setLoading(false);
    };
    fetchGenreList();
  }, []);

  const filterByGenre = ({ target }) => {
    setFilterGenreId(target.value);
  }

  if (loading) return (
    <div>
      Loading...
    </div>
  );

  return (
    <div className="c-mo-container">
      <div>
        <select
          className="c-mo-select"
          value={filterGenreId}
          onChange={(event) => filterByGenre(event)}
        >
          <option key="none" value="">por gênero</option>
          {genreList.map((genre) => (
            <option key={genre.id} value={genre.id}>{genre.name}</option>
          ))}
        </select>
        <button
          type="button"
          className={filterPopularity ? 'c-mo-button-on' : 'c-mo-button-off'}
          onClick={() => setFilterPopularity(!filterPopularity)}
        >
          mais populares
          </button>
      </div>
      <select
        className="c-mo-select"
        value={viewType}
        onChange={() => setViewType(!viewType)}
      >
        <option value={false}>em grid</option>
        <option value={true}>em lista</option>
      </select>
    </div>
  );
};

export default MenuOptions;
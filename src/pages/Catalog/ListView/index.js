import React, { useContext } from 'react';
import MoviesContext from '../../../Context/MoviesContext';
import MovieCard from '../MovieCard';

import './style.css';

function ListView() {
  const { movies } = useContext(MoviesContext);

  if (movies.length < 1) return (<div>Loading...</div>)

  return (
    <div className="lv-content">
      {movies.map((movie) => <MovieCard movie={movie} />)}
    </div>
  );
};

export default ListView;
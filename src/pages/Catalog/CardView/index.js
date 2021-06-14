import React, { useContext } from 'react';
import MoviesContext from '../../../Context/MoviesContext';
import MovieCard from '../MovieCard';

import './style.css';

function CardView() {
  const { movies, viewType } = useContext(MoviesContext);

  const viewClass = viewType ? "lv-content" : "gv-content";

  if (movies.length < 1) return (<div>Loading...</div>)

  return (
    <div className={viewClass}>
      {movies.map((movie, index) => <MovieCard key={index} movie={movie} />)}
    </div>
  );
};

export default CardView;
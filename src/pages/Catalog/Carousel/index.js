import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import settings from './settings';
import { recentMovies } from '../../../services/tmdbAPI';
import MovieCard from './MovieCard';

function Carousel() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      const response = await recentMovies();
      setMovies(response);
    };
    fetchMovie();
  }, [setMovies]);

  if (movies.length < 1) return (<div>Loading...</div>)

  return (
    <div className="cc-content">
      <Slider {...settings}>
        {
          movies.map((movie, index) => {
            return (
              <div key={index}>
                <MovieCard movie={movie} />
              </div>
            );
          })
        }
      </Slider>
    </div>
  );

};

export default Carousel;

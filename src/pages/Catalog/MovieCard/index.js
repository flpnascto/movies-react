import React from 'react';
import PropTypes from "prop-types";
import { imgUrl } from '../../../services/tmdbAPI';
import starImg from '../../../assets/star-outline.svg';

import './style.css'

function MovieCard({ movie }) {
  // const genreList = (movie.genres).map((genre) => genre.name);

  return (
    <div className="mc-container">
      <img className="mc-image" alt="cover" src={`${imgUrl}${movie.poster_path}`} />
      <div className="mc-content">
        <div className="mc-title">{movie.original_title}</div>
        {/* <div className="mc-genre">{genreList}</div> */}
        <div className="mc-bar-rating">
          <img alt="star" src={starImg} />
          <div className="mc-rating">{movie.vote_average}</div>
        </div>
        <div className="mc-overview">{movie.overview}</div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired
};

export default MovieCard;
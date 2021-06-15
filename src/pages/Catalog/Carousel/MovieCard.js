import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from "prop-types";
import { imgUrl } from '../../../services/tmdbAPI';
import starImg from '../../../assets/star-outline.svg';
import noFolderImg from '../../../assets/no-folder.svg';

import './style.css';
import MoviesContext from '../../../Context/MoviesContext';

function MovieCard({ movie }) {
  const { genres } = useContext(MoviesContext);
  const genresNameArray = movie["genre_ids"]
    .map((id) => genres.filter((genre) => parseInt(genre.id) === id)
      .map((genre) => genre.name));

  let folderImg = noFolderImg;
  if (movie.poster_path !== null) folderImg = `${imgUrl}${movie.poster_path}`;

  const history = useHistory();

  return (
    <>
      <button
        type="button"
        className="transparent"
        onClick={() => history.push(`/movies/${movie.id}`)}
      >
        <div className="cc-mc-content">
          <img className="cc-mc-image" alt="folder" src={folderImg} />
          <div className="cc-mc-title">{movie.original_title}</div>
          <div className="cc-mc-genre">{genresNameArray.join(', ')}</div>
          <div className="cc-mc-bar-rating">
            <img alt="star" src={starImg} />
            <div className="cc-mc-rating">{movie.vote_average}</div>
          </div>
        </div>
      </button>
    </>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired
};

export default MovieCard;
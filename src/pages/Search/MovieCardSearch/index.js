import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import PropTypes from "prop-types";
import { imgUrl } from '../../../services/tmdbAPI';
import starImg from '../../../assets/star-outline.svg';
import noFolderImg from '../../../assets/no-folder.svg';

import './style.css'
import MoviesContext from '../../../Context/MoviesContext';

function MovieCardSearch({ movie }) {
  const { genres, setShowSearch } = useContext(MoviesContext);
  const genresNameArray = movie["genre_ids"]
    .map((id) => genres.filter((genre) => parseInt(genre.id) === id)
      .map((genre) => genre.name));

  let folderImg = noFolderImg;
  if (movie.poster_path !== null) folderImg = `${imgUrl}${movie.poster_path}`;

  const handleMovieDetails = () => {
    setShowSearch(false);
    history.push(`/movies/${movie.id}`)
  }


  const history = useHistory();

  return (
    <>
      <button className="transparent" type="button" onClick={() => handleMovieDetails()}>
        <div className="s-mc-container">
          <img className="s-mc-image" alt="cover" src={folderImg} />
          <div className="s-mc-content">
            <div className="s-mc-title">{movie.original_title}</div>
            <div className="s-mc-genre">{genresNameArray.join(', ')}</div>
            <div className="s-mc-bar-rating">
              <img alt="star" src={starImg} />
              <div className="s-mc-rating">{movie.vote_average}</div>
            </div>
          </div>
        </div>
      </button>
    </>
  );
};

MovieCardSearch.propTypes = {
  movie: PropTypes.object.isRequired
};

export default MovieCardSearch;
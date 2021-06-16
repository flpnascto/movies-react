import React from 'react';
import PropTypes from "prop-types";
import { imgUrl } from '../../services/tmdbAPI';
import starImg from '../../assets/star-outline.svg';
import noFolderImg from '../../assets/no-folder.svg';


import './style.css'

function DetailsCard({ movie }) {
  const genreList = (movie.genres).map((genre) => genre.name);

  let folderImg = noFolderImg;
  if (movie.poster_path !== null) folderImg = `${imgUrl}${movie.poster_path}`;

  return (
    <div className="md-content-details">
      <img className="md-image" alt="cover" src={folderImg} />
      <div className="md-info">
        <div className="md-info-title">{movie.original_title}</div>
        <div className="md-info-bar">
          <div className="md-info-genre">{genreList}</div>
          <div className="md-info-bar-rating">
            <img alt="star" src={starImg} />
            <div className="md-info-rating">{movie.vote_average}</div>
          </div>
        </div>
        <div className="md-info-subtile">Sinopse</div>
        <div className="md-info-overview">{movie.overview}</div>
      </div>
    </div>
  );
}

DetailsCard.propTypes = {
  movie: PropTypes.object.isRequired
};

export default DetailsCard;
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { getMovieDetails, getMovieTrailer } from '../../services/tmdbAPI';
import DetailsCard from './DetailsCard';
import Trailer from './Trailer';

import './style.css'

function MovieDetail() {
  const history = useHistory();
  const movieId = (history.location.pathname).replace('/movies/', '');

  const [data, setData] = useState([]);
  const [embedId, setEmbedId] = useState("");

  useEffect(() => {
    async function fetchMovie() {
      const response = await getMovieDetails(movieId);
      setData(response);
    };
    fetchMovie();
  }, [setData, movieId]);

  useEffect(() => {
    async function fetchMovieTrailer() {
      const response = await getMovieTrailer(movieId);
      setEmbedId(response);
    };
    fetchMovieTrailer();
  }, [setEmbedId, movieId]);

  if (data.length < 1) return null;
  return (
    <div className="md-content">
      <DetailsCard movie={data} />
      { (embedId !== "") && <Trailer embedId={embedId} />}
    </div>
  );
};

export default MovieDetail;
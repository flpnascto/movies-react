const URL = 'https://api.themoviedb.org/3/';

const queryKey = `api_key=${process.env.REACT_APP_APIKEY}`;

export async function recentMovies() {
  const endpoint = `${URL}discover/movie?sort_by=release_date.asc&region=US&page=1&include_adult=false&include_video=true&primary_release_year=2021&${queryKey}`;
  const requestResponse = await fetch(endpoint)
    .then((response) => response.json())
    .then((data) => data.results);
  return requestResponse;
};

export async function getMovieDetails(id) {
  const endpoint = `${URL}movie/${id}?${queryKey}`;
  const requestResponse = await fetch(endpoint)
    .then((response) => response.json());
  return requestResponse;
};

export async function getMovies(page, genreId, popularity) {
  let endpoint = `${URL}discover/movie?include_adult=false&include_video=true&region=US&page=${page}&with_genres=${genreId}&${queryKey}`;
  if (!popularity) endpoint += "&sort_by=original_title.asc";
  const requestResponse = await fetch(endpoint)
    .then((response) => response.json())
    .then((data) => data.results);
  return requestResponse;
};

export async function getGenresList() {
  const endpoint = `${URL}genre/movie/list?${queryKey}`;
  const requestResponse = await fetch(endpoint)
    .then((response) => response.json())
    .then((data) => data.genres);;
  return requestResponse;
};

export async function getMovieTrailer(id) {
  const endpoint = `${URL}movie/${id}/videos?${queryKey}`;
  const requestResponse = await fetch(endpoint)
    .then((response) => response.json())
    .then((data) => data.results[0].key);
  return requestResponse;
};

export const imgUrl = 'https://image.tmdb.org/t/p/w500';

const API_KEY = 'df4f25ddce476816dc7867d9ac4bd1ea';

function fetchTrendingMovies() {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?include_adult=false&language=en-US&page=1&api_key=${API_KEY}`
  ).then(response => {
    return response.json();
  });
}

function fetchMoviesBySearch(title) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${title}&api_key=${API_KEY}`
  ).then(response => {
    return response.json();
  });
}

function fetchMovieDetails(movie_id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US&api_key=${API_KEY}`
  ).then(response => {
    return response.json();
  });
}

function fetchMovieCast(movie_id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits?language=en-US&api_key=${API_KEY}`
  ).then(response => {
    return response.json();
  });
}

function fetchMovieReviews(movie_id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/reviews?language=en-US&page=1&api_key=${API_KEY}`
  ).then(response => {
    return response.json();
  });
}

const api = {
  fetchTrendingMovies,
  fetchMoviesBySearch,
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieReviews,
};

export default api;

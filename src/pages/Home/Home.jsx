import { useState, useEffect } from 'react';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import api from '../../services/movies-api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Home = () => {
  const [status, setStatus] = useState(Status.IDLE);
  const [moviesArr, setMoviesArr] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus(Status.PENDING);

    api
      .fetchTrendingMovies()
      .then(moviesObj => {
        if (moviesObj.results.length === 0) {
          return Promise.reject(new Error(`Movies not found`));
        }

        setMoviesArr([...moviesObj.results]);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, []);

  if (status === 'idle') {
    return null;
  }

  if (status === 'pending') {
    return (
      <main>
        <div>Loading...</div>;
      </main>
    );
  }

  if (status === 'rejected') {
    return (
      <main>
        <div>{error.message}</div>
      </main>
    );
  }

  if (status === 'resolved') {
    return (
      <main>
        <MoviesList movies={moviesArr} />
      </main>
    );
  }
};

export default Home;

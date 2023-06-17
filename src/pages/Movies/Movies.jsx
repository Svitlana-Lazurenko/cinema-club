import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import api from '../../services/movies-api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Movies = () => {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState(Status.IDLE);
  const [moviesArr, setMoviesArr] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.size) {
      return;
    }

    setStatus(Status.PENDING);
    const movieTitle = searchParams.get('title') ?? '';

    api
      .fetchMoviesBySearch(movieTitle)
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
  }, [searchParams]);

  const onSubmit = e => {
    e.preventDefault();
    const title = e.target.title.value;
    const nextParams = title !== '' ? { title } : {};
    setSearchParams(nextParams);
    setQuery('');
  };

  const onChange = queryInput => {
    setQuery(queryInput);
  };

  if (status === 'idle') {
    return (
      <main>
        <SearchForm value={query} onSubmit={onSubmit} onChange={onChange} />
      </main>
    );
  }

  if (status === 'pending') {
    return (
      <main>
        <SearchForm value={query} onSubmit={onSubmit} onChange={onChange} />
        <div>Loading...</div>
      </main>
    );
  }

  if (status === 'rejected') {
    return (
      <main>
        <SearchForm value={query} onSubmit={onSubmit} onChange={onChange} />
        <div>{error.message}</div>
      </main>
    );
  }

  if (status === 'resolved') {
    return (
      <main>
        <SearchForm value={query} onSubmit={onSubmit} onChange={onChange} />
        <MoviesList movies={moviesArr} />
      </main>
    );
  }
};

export default Movies;

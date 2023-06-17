import { useState, useEffect, Suspense, useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { BackLink } from '../../components/BackLink/BackLink';
import { MovieMainInfo } from '../../components/MovieMainInfo/MovieMainInfo';
import api from '../../services/movies-api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const MovieDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const [status, setStatus] = useState(Status.IDLE);
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus(Status.PENDING);

    api
      .fetchMovieDetails(id)
      .then(movieObj => {
        if (!movieObj) {
          return Promise.reject(new Error(`Information about movie not found`));
        }

        setMovie({ ...movieObj });
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [id]);

  if (status === 'idle') {
    return null;
  }

  if (status === 'pending') {
    return (
      <main>
        <div>Loading...</div>
      </main>
    );
  }

  if (status === 'rejected') {
    return (
      <main>
        <div>Error: {error.message}</div>
      </main>
    );
  }

  if (status === 'resolved') {
    return (
      <main>
        <BackLink to={backLinkLocationRef.current}>Go back</BackLink>
        <MovieMainInfo movie={movie} />
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </main>
    );
  }
};

export default MovieDetails;

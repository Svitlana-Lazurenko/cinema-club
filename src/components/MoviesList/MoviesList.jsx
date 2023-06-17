import { Link, useLocation } from 'react-router-dom';
import { Container, CardWrapper, MovieTitle } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <Container>
      {movies.map(movie => (
        <CardWrapper key={movie.id}>
          <Link to={`${movie.id}`} state={{ from: location }}>
            <MovieTitle>{movie.title}</MovieTitle>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};

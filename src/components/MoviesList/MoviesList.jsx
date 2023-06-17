import { useLocation } from 'react-router-dom';
import {
  Container,
  StyledLink,
  CardWrapper,
  MovieTitle,
} from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <Container>
      {movies.map(movie => (
        <StyledLink
          to={`${movie.id}`}
          state={{ from: location }}
          key={movie.id}
        >
          <CardWrapper
            background={
              movie.backdrop_path
                ? `https://image.tmdb.org/t/p/w300${movie.backdrop_path}`
                : null
            }
          >
            <MovieTitle>{movie.title}</MovieTitle>
          </CardWrapper>
        </StyledLink>
      ))}
    </Container>
  );
};

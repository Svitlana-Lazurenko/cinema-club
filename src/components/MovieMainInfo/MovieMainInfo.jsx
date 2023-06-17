import PropTypes from 'prop-types';

import {
  Container,
  Title,
  Poster,
  UserScore,
  DescriptionTitle,
  Description,
  GenresTitle,
  GenresList,
  GenreItem,
} from './MovieMainInfo.styled';

export const MovieMainInfo = ({ movie }) => {
  return (
    <Container>
      <Poster
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
            : 'https://fakeimg.pl/300x450?text=300x450'
        }
        alt={`poster of movie ${movie.title}`}
      />
      <Title>
        {movie.title} ({movie.release_date.slice(0, 4)})
      </Title>
      <UserScore>User score: {Math.round(movie.vote_average * 10)}%</UserScore>
      <DescriptionTitle>Overview</DescriptionTitle>
      <Description>{movie.overview}</Description>
      <GenresTitle>Genres</GenresTitle>
      <GenresList>
        {movie.genres.map(genre => (
          <GenreItem key={genre.id}>{genre.name}</GenreItem>
        ))}
      </GenresList>
    </Container>
  );
};

MovieMainInfo.propTypes = {
  movie: PropTypes.PropTypes.object.isRequired,
};

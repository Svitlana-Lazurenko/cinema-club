import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

export const Poster = styled.img`
  display: block;
  margin-left: 8px;
`;

export const Info = styled.div`
  margin-left: 25px;
`;

export const Title = styled.h1`
  margin-bottom: 10px;
`;

export const UserScore = styled.p`
  margin-bottom: 30px;
`;

export const DescriptionTitle = styled.h2`
  margin-bottom: 10px;
`;

export const Description = styled.p`
  margin-bottom: 30px;
`;

export const GenresTitle = styled.h2`
  margin-bottom: 10px;
`;

export const GenresList = styled.ul``;

export const GenreItem = styled.li`
  display: inline;
  :not(:last-child) {
    margin-right: 10px;
  }
`;

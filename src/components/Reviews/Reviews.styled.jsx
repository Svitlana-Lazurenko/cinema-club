import styled from '@emotion/styled';

export const Container = styled.div`
  margin-top: 30px;
  margin-bottom: 50px;
`;

export const ReviewsList = styled.ul``;

export const ReviewItem = styled.li`
  :not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const Author = styled.h2`
  text-decoration: underline;
  margin-bottom: 15px;
`;

export const Content = styled.p`
  text-indent: 1%;
`;

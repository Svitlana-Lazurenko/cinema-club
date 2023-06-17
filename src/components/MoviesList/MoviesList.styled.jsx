import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const StyledLink = styled(Link)`
  flex-basis: calc((100% - 45px) / 4);
  text-transform: uppercase;

  :hover {
    color: orange;
  }
`;

export const CardWrapper = styled.div`
  border: 1px solid orange;
  border-radius: 7px;
  width: 100%;
  height: 145px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: linear-gradient(to right, #2f303a66, #2f303a66),
    url(${props => props.background});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const MovieTitle = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 20px;

  padding: 10px;
`;

import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 25px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 15px 0;
  margin-bottom: 16px;

  border-bottom: 1px solid orange;

  > nav {
    display: flex;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  font-size: 30px;
  color: white;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;

  &.active {
    background-color: orangered;
  }
`;

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: rgba(17, 17, 26, 0.25) 0px 5px 10px;
`;

export const Main = styled.main`
  padding: 0 20px;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 10px;
  font-size: 20px;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  color: black;

  &.active {
    background-color: orange;
    color: #fff;
  }
`;

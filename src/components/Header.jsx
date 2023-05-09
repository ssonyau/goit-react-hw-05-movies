import React from 'react';
import { HeaderContainer, StyledLink } from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="movies">Movies</StyledLink>
    </HeaderContainer>
  );
};

export default Header;

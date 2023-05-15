import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Main, StyledNavLink, Header } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <StyledNavLink to="/" end>
            Home
          </StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </Header>
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

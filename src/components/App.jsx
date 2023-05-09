import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from 'Pages/Layout';
import HomePage from 'Pages/HomePage';

const MoviesPage = lazy(() => import('Pages/MoviesPage'));
const MovieCard = lazy(() => import('./MovieCard'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));
const Page404 = lazy(() => import('./Page404'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />}></Route>
          <Route path="movies/:id" element={<MovieCard />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/404" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  );
};

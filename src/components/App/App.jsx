import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../Layout/Layout';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('../MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../Cast/Cast'));
const MovieReviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<Home />}></Route>
      </Route>
    </Routes>
  );
};

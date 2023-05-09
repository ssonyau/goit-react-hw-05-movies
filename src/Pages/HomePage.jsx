import React, { useEffect, useState } from 'react';
import MovieList from 'components/MovieList';
import { tranding } from '../API';

const HomePage = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const movies = tranding();
    movies.then(data => {
      setMovieList(data);
    });
  }, []);

  return (
    <div>
      <MovieList movies={movieList} />
    </div>
  );
};

export default HomePage;

import React, { useEffect, useState } from 'react';
import { movieSearchByKeyWord } from 'API';
import MovieList from 'components/MovieList';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [formQuery, setFormQuery] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({ query: '' });

  function fetchFilm(event) {
    event.preventDefault();
    setSearchParams({ query: formQuery.trim() });
  }

  useEffect(() => {
    const searchWord = searchParams.get('query');
    if (!searchWord) {
      return;
    }
    const movies = movieSearchByKeyWord(searchWord, 1);
    movies.then(data => {
      setMovieList(data.results);
    });
  }, [searchParams]);

  return (
    <>
      <form onSubmit={fetchFilm}>
        <input
          type="text"
          value={formQuery}
          onChange={event => setFormQuery(event.target.value)}
        />
      </form>
      {movieList.length !== 0 && <MovieList movies={movieList} />}
    </>
  );
};

export default MoviesPage;

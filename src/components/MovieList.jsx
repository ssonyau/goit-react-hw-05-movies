import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const [movieData, setMovieData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (movies.length !== 0) {
      setMovieData(movies);
    }
  }, [movies, movieData]);

  return (
    <ul>
      {movieData.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title || movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};

export default MovieList;

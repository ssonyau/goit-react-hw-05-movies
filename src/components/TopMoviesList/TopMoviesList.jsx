import { Link, useLocation } from 'react-router-dom';

export const TopMoviesList = ({ topMovies }) => {
  const location = useLocation();

  return (
    <>
      <h1>Trending today</h1>
      {topMovies.length !== 0 && (
        <ul>
          {topMovies.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link
                  to={`movies/${id}`}
                  state={location}
                  style={{ textDecoration: 'none' }}
                >
                  <p>{title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

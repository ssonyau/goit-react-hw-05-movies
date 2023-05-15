import fetchQuery from 'Api/API';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Button, InputSearch } from './Movies.styled';

//* запит згідно з API
const QUERY_URL = 'search/movie';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({});

  const movieName = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (movieName === '') return;

    fetchQuery(QUERY_URL, searchParams)
      .then(res => {
        setSearchMovies(res.results);
      })
      .catch(error => console.log(error));
  }, [movieName, searchParams]);

  const submitForm = e => {
    e.preventDefault();
    const value = e.target.search.value;
    const searchOpt = value.trim() === '' ? {} : { query: value };
    setSearchParams(searchOpt);
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <InputSearch type="text" name="search" placeholder="Search movies" />
        <Button type="submit">Search</Button>
      </form>

      {searchMovies.length !== 0 && (
        <div>
          <ul>
            {searchMovies.map(({ id, title }) => (
              <li key={id}>
                <Link to={`${id}`} state={location}>
                  <p>{title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Movies;

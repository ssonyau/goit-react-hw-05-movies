import fetchQuery from 'Api/API';
import { TopMoviesList } from 'components/TopMoviesList/TopMoviesList';
import { useState, useEffect } from 'react';

// запит згідно з API
const QUERY_URL = 'trending/movie/week';

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    // Запит на перелік популярних фільмів
    fetchQuery(QUERY_URL)
      .then(({ results }) => {
        if (results.length === 0) {
          return;
        }
        setTopMovies(results);
      })
      .catch(error => console.log(error));
  }, []);

  return <TopMoviesList topMovies={topMovies} />;
};

export default Home;

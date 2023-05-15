import fetchQuery from 'Api/API';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  StyledNavLink,
  Section,
  BackLink,
  ListLink,
} from './MovieDetails.styled';
import defaultImgMovie from '../../Images/movie.png';
import { useRef } from 'react';

const MovieDetails = () => {
  const [currentMovie, setCurrentMovie] = useState([]);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationsRef = useRef(location.state ?? '/movies');

  //* запит згідно з API
  const QUERY_URL = `/movie/${movieId}`;

  useEffect(() => {
    fetchQuery(QUERY_URL)
      .then(res => {
        setCurrentMovie(res);
      })
      .catch(error => console.log(error));
  }, [QUERY_URL]);

  const { poster_path, original_title, overview, genres, vote_average } =
    currentMovie;

  return (
    <>
      {Object.keys(currentMovie).length !== 0 && (
        <div>
          <BackLink to={backLinkLocationsRef.current}> Go back</BackLink>
          <Section>
            <div>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : defaultImgMovie
                }
                alt="..."
              ></img>
            </div>
            <div>
              <h1>{original_title}</h1>
              <p>User Score: {vote_average.toFixed(1) * 10 + ' %'}</p>
              <h2>Overview</h2>
              <p>{overview ? overview : 'No review'}</p>
              <h3>Genres</h3>
              <p>
                {genres.length !== 0
                  ? genres.map(genre => genre.name).join(', ')
                  : 'Unknown genres'}
              </p>
            </div>
          </Section>
          <div>
            <p>Additional Information</p>
            <ListLink>
              <li>
                <StyledNavLink to="cast">Cast</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="reviews">Reviews</StyledNavLink>
              </li>
            </ListLink>
          </div>
        </div>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;

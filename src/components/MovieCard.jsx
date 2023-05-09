import React, { useEffect, useState, Suspense } from 'react';
import { useRef } from 'react';
import {
  Link,
  Outlet,
  // useNavigate,
  useParams,
  useLocation,
} from 'react-router-dom';
import { movieDetail } from '../API';
import {
  Container,
  DescriptionContainer,
  AdditionInfoSection,
  ButtonLink,
} from './MovieCard.styled';

const MovieCard = () => {
  const { id } = useParams();
  // const navigate = useNavigate();
  const [movieItem, setMovieItem] = useState(null);

  const location = useLocation();
  const someLocation = useRef(location.state.from);

  useEffect(() => {
    movieDetail(id).then(data => {
      if (data === '404') {
        // navigate('/404');
        console.log('no data');
      } else {
        setMovieItem(data);
      }
    });
  }, [id]);

  if (!movieItem) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {someLocation.current && (
        <ButtonLink>
          <Link to={someLocation.current}>&lt;-Go back</Link>
        </ButtonLink>
      )}

      <Container>
        <img
          src={`https://image.tmdb.org/t/p/w300/${movieItem.poster_path}`}
          alt={`${movieItem.original_title}`}
        />
        <DescriptionContainer>
          <h1>{movieItem.title}</h1>
          <p>User score: {(movieItem.vote_average * 10).toFixed()}%</p>
          <h2>Overview</h2>
          <p>{movieItem.overview}</p>
          <h3>Genres</h3>
          <p>{movieItem.genres.map(e => e.name).join(', ')}</p>
        </DescriptionContainer>
      </Container>
      <AdditionInfoSection>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast" state={{ from: location }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location }}>
              Reviews
            </Link>
          </li>
        </ul>
      </AdditionInfoSection>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieCard;

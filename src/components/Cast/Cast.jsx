import fetchQuery from 'Api/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ListCast, ItemCast, ItemCastText, ImgCast } from './Cast.styled';
import defaultImg from '../../Images/default-avatar.png';

//* Інформація про акторський склад (Рендериться на сторінці MovieDetails)

const Cast = () => {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  //* запит згідно з API
  const QUERY_URL = `/movie/${movieId}/credits`;

  useEffect(() => {
    fetchQuery(QUERY_URL)
      .then(res => {
        setCast(res.cast);
      })
      .catch(error => console.log(error));
  }, [QUERY_URL]);

  return (
    <>
      {cast.length === 0 ? (
        'No cast information available'
      ) : (
        <ListCast>
          {cast.map(({ original_name, profile_path, character, id }) => (
            <ItemCast key={id}>
              <ImgCast
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : defaultImg
                }
                alt={original_name}
              />
              <ItemCastText>
                <strong>{original_name}</strong>
              </ItemCastText>
              <ItemCastText>Role: {character} </ItemCastText>
            </ItemCast>
          ))}
        </ListCast>
      )}
    </>
  );
};

export default Cast;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieCastFetch } from 'API';
import ActorCard from './ActorCard';

const Cast = () => {
  const [movieCast, setmovieCast] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const Cast = movieCastFetch(id);
    Cast.then(e => {
      setmovieCast(e.cast);
    });
  }, [id]);

  return (
    <div>
      {movieCast &&
        movieCast.map((actor, i) => (
          <ActorCard
            key={Number(`${actor.id}${i}`)}
            name={actor.name}
            character={actor.character}
            profile_path={actor.profile_path}
          />
        ))}
    </div>
  );
};

export default Cast;

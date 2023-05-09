import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  PhotoPlaceholderw92,
  DescriptionContainer,
} from './MovieCard.styled';

const ActorCard = ({ name, character, profile_path }) => {
  return (
    <Container>
      {profile_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w92/${profile_path}`}
          alt={name}
        />
      ) : (
        <PhotoPlaceholderw92>no image</PhotoPlaceholderw92>
      )}

      <DescriptionContainer>
        <h3>{name}</h3>
        <p>Character:{character}</p>
      </DescriptionContainer>
    </Container>
  );
};
ActorCard.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string,
  profile_path: PropTypes.string,
};

export default ActorCard;

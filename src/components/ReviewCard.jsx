import React from 'react';
import PropTypes from 'prop-types';
import { Container, DescriptionContainer } from './MovieCard.styled';

const ReviewCard = ({ content, author }) => {
  return (
    <Container>
      <DescriptionContainer>
        <h3>{author}</h3>
        <p>{content}</p>
      </DescriptionContainer>
    </Container>
  );
};

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default ReviewCard;

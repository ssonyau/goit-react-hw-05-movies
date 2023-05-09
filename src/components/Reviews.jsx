import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieReviewsFetch } from 'API';
import ReviewCard from './ReviewCard';

const Reviews = () => {
  const [movieReview, setmovieReview] = useState();
  const { id } = useParams();

  useEffect(() => {
    movieReviewsFetch(id).then(e => {
      setmovieReview(e.results);
      // console.log('e', e)
    });
  }, [id]);

  return (
    <div>
      {movieReview ? (
        movieReview.length > 0 ? (
          movieReview.map(review => (
            <ReviewCard
              key={review.id}
              content={review.content}
              author={review.author}
            />
          ))
        ) : (
          <p>There are no reviews.</p>
        )
      ) : (
        <p>Loading reviews...</p>
      )}
    </div>
  );
};

export default Reviews;

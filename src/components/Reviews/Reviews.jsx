import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/movies-api';
import {
  Container,
  ReviewsList,
  ReviewItem,
  Author,
  Content,
} from './Reviews.styled';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus(Status.PENDING);

    api
      .fetchMovieReviews(id)
      .then(reviewsObj => {
        if (reviewsObj.results === 0) {
          return Promise.reject(new Error(`Cast not found`));
        }

        setReviews([...reviewsObj.results]);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [id]);

  if (status === 'idle') {
    return null;
  }

  if (status === 'pending') {
    return <div>Loading...</div>;
  }

  if (status === 'rejected') {
    return <div>Error: {error.message}</div>;
  }

  if (status === 'resolved') {
    return (
      <Container>
        <ReviewsList>
          {reviews.map(review => (
            <ReviewItem key={review.id}>
              <Author>{review.author}</Author>
              <Content>{review.content}</Content>
            </ReviewItem>
          ))}
        </ReviewsList>
      </Container>
    );
  }
};

export default Reviews;

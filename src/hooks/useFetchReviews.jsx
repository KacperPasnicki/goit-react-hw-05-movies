import { useState, useEffect } from 'react';
import { fetchReviews } from 'API/API';

export const useFetchReviews = movieId => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (movieId)
      fetchReviews(movieId).then(res => {
        setReviews([...res.results]);
      });
  }, [movieId]);

  return { reviews };
};

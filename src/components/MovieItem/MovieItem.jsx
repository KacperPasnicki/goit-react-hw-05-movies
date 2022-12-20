import { React, Link } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from 'MovieItem.module.css';

const MovieItem = ({ title, movie }) => {
  const location = useLocation();
  return (
    <b className={css.Links}>
      <Link to={`${movie.id}`} location={location}>
        {title}
      </Link>
    </b>
  );
};

export default MovieItem;

MovieItem.propTypes = {
  title: PropTypes.object.isRequired,
  movie: PropTypes.object.isRequired,
};

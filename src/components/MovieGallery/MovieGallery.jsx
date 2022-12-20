import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MovieGallery.module.css'

const MovieGallery = ({ movies }) => {
  const location = useLocation();

  if (!movies) return;

  return (
    <ul className={css.MovieGallery}>
      {movies.map(movie => {
        return (
          <li className={css.MovieItem} id={movie.id} key={movie.id}>
            <NavLink
              to={`${movie.id}`}
              state={{ from: location }}
              className={css.Links}
            >
              {movie.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

MovieGallery.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieGallery;

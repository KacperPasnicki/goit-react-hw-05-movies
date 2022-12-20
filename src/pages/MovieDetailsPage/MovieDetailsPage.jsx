import {
  useLocation,
  useParams,
  NavLink,
  Link,
  Outlet,
} from 'react-router-dom';
import { useFetchDetails } from 'hooks/useFetchDetails';
import css from './MovieDetailsPage.module.css'

const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const { movie } = useFetchDetails(movieId);

  let img_path = `https://image.tmdb.org/t/p/w500`;
  const backHref = location.state?.from ?? '/movies';

  if (!movie) return '...Loading';

  return (
    <main className={css.detailsPage}>
      <NavLink to={backHref} className={css.Links}>
        ← Go back
      </NavLink>
      <div>
        <img
          src={img_path + movie.poster_path}
          alt={movie.alt}
          width="350px"
        ></img>
      </div>
      <h2>
        Title: {movie.title}({movie.release_date.slice(0, 4)})
      </h2>
      <span>user score: {movie.vote_average.toFixed(1)}/10</span>
      <h3>Genres</h3>
      {movie.genres.map(genre => genre.name).join(', ')}
      <h3>Overview:</h3>
      <span>{movie.overview}</span>

      <h4>Additional information</h4>

      <ul>
        <li>
          <Link to="Cast" className={css.Links}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="Reviews" className={css.Links}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};

export default MovieDetails;

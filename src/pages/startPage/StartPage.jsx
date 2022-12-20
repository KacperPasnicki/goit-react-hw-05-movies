import axios from 'axios';
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import css from './StartPage.module.css';

const API_KEY = '32592fc1c467ab313147df8555d6672d';

const StartPage = () => {
  const [page] = useState([1]);
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&include_adult=false`
    );
    setMovies(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, [page]);

  if (!StartPage) return '...loading';

  return (
    <ul>
      <h2 className={css.header}>Trending Today</h2>
      {movies.map(movie => (
        <li key={movie.id} id={movie.id} className={css.MovieItem}>
          <NavLink
            to={`movies/${movie.id}`}
            location={location}
            className={css.Links}
          >
            {movie.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default StartPage;

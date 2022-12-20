import { useFetchCredits } from 'hooks/useFetchCredits';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const { cast } = useFetchCredits(movieId);
  let img_path = `https://image.tmdb.org/t/p/w500`;

  if (!cast) return '...Loading';
  return (
    <ul>
      {cast &&
        cast.map(actors => {
          return (
            <li className={css.actors} key={actors.id}>
              {actors.profile_path === null ? (
                <span className={css.actorPlaceholder}>&#x263B;</span>
              ) : (
                <img
                  src={img_path + actors.profile_path}
                  alt={actors.name}
                  width="80px"
                ></img>
              )}

              <h5 style={{ margin: '0' }}>{actors.name}</h5>
              <span>{actors.character}</span>
            </li>
          );
        })}
    </ul>
  );
};

export default Cast;

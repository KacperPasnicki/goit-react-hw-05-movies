
import { useLocation, useParams, NavLink, Link, Outlet} from 'react-router-dom'
import {useFetchDetails} from 'hooks/useFetchDetails'


const MovieDetails = () => {
     const location = useLocation();
    const { movieId } = useParams();
    const { movie } = useFetchDetails(movieId);
    

    
// const [genres, setGenres] = useState([])
// const [movie, setMovie] = useState(null);
// const [movieId, setMovieId] =useState();
// const [userScore, setUserScore] = useState('')
// const [overview, setOverview] =useState('')

let img_path=`https://image.tmdb.org/t/p/w500`
const backHref = location.state?.from ?? '/movies';

  


if (!movie) return "...Loading";
let genres =[]

return (
<main>
<NavLink to={backHref} >
        ← Go back
      </NavLink>
<div>
      <img src={img_path+movie.poster_path} alt={movie.alt}  width="350px" ></img>
      </div>
 <h2>Tytuł:{movie.title}({movie.release_date})</h2>
 <span>user score: {movie.vote_average}</span>
 <h3>Genres</h3>
 {/* {movie.genres.map(genre => genre.name).join(', ')} */}
 <h3>Overview:</h3>
 <span>
    {movie.overview}
 </span>

<h4>Additional information</h4>

<ul>
   <li>
   <Link to="Cast">
      Cast
   </Link></li>
   <li>
   <Link to="Reviews">
      Reviews
   </Link></li>
</ul>
<Outlet />
</main>
)


}

export default MovieDetails;


{/* <ul >
      {genres.genres.map((genre, i) => (
        <li key={genre.name} >{genre.name}{i === genres.genres.length - 1 ? '' : ', '}</li>
      ))}
    </ul> */}
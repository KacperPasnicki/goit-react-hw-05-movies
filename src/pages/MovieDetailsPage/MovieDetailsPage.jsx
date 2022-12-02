
import { useLocation, useParams, NavLink} from 'react-router-dom'
import {useFetchDetails} from 'hooks/useFetchDetails'
import { useEffect, useState } from 'react';
import {fetchDetails}   from 'API/API'

const MovieDetails = () => {
     const location = useLocation();
    const { movieId } = useParams();
    const { movie } = useFetchDetails(movieId);
   const {genres} = useState()

    
// const [genres, setGenres] = useState([])
// const [movie, setMovie] = useState(null);
// const [movieId, setMovieId] =useState();
// const [userScore, setUserScore] = useState('')
// const [overview, setOverview] =useState('')

let img_path=`https://image.tmdb.org/t/p/w500`
const backHref = location.state?.from ?? '/movies';

  
 
// useEffect(() => {
//    if (movieId) 
//    fetchDetails(movieId).then(res => {
//       setMovieId({...res});
//    });
//    console.log(movieId)
//  console.log(movie)
//  }, [movieId]);


// if (!movie) return "hello movie";

return (
<>
<NavLink to={backHref} >
        ← Go back
      </NavLink>
<div>
      <img src={img_path+movie.poster_path} alt={movie.alt}  width="350px"></img>
      </div>
 <h2>Tytuł:{movie.title}({movie.release_date.slice(0,4)})</h2>
 <span>user score: {movie.vote_average}</span>
 
 <h3>Overview:</h3>
 <span>
    {movie.overview}
 </span>
<h6>Additional information</h6>

<ul>
   <li>
      Cast
   </li>
   <li>
      Reviews
   </li>
</ul>

</>
)


}

export default MovieDetails;


{/* <ul >
      {genres.genres.map((genre, i) => (
        <li key={genre.name} >{genre.name}{i === genres.genres.length - 1 ? '' : ', '}</li>
      ))}
    </ul> */}
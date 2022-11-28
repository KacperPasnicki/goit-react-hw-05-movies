
import { useLocation, useParams} from 'react-router-dom'
import {useFetchDetails} from 'hooks/useFetchDetails'


const MovieDetails = () => {
    //  const location = useLocation();
    const { movieId } = useParams();
    const { movie } = useFetchDetails(movieId);
   

    
// const [genres, setGenres] = useState([])
// const [photo, setPhoto] = useState([])
// const [userScore, setUserScore] = useState('')
// const [overview, setOverview] =useState('')

let img_path=`https://image.tmdb.org/t/p/w500`


  
//   const backHref = location.state?.from ?? '/movies'

// if (!movie) return "hello movie";

return (
<>
 <h2>Tytuł:{movie.title}</h2>
 <span>Overview:
    {movie.overview}
 </span>
</>
)


}

export default MovieDetails;
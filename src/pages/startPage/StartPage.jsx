import axios from "axios";
// import MovieItem from "components/MovieItem/MovieItem";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const API_KEY = '32592fc1c467ab313147df8555d6672d';


 const StartPage = () => {

    const [page] = useState([1])
    const [movies, setMovies] = useState([])
    const location = useLocation();
    
    const fetchTrending = async () => {
    
    const {data} = await axios.get
    (`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&include_adult=false`)
    
    console.log(data)
    setMovies(data.results);
    
    }

    useEffect(()=> {
    fetchTrending()
    
},[page] )

if (!StartPage) return "...loading"

return (

<ul className="MovieGallery">

        <h2 className="header">Trending Today</h2>
       {movies.map((movie) =>
        ( 
        <li key={movie.id} id={movie.id} className="MovieItem" >
      
    <NavLink to={`movies/${movie.id}`} location={location}>
    {movie.title}
    </NavLink>
    
        
        </li>
        )
        )}
         </ul>

)
    }


    export default StartPage;
    
    // <MovieItem
            
    //         id={video.id}
    //         title={video.title || video.name}
    //     />
import { NavLink, useLocation } from "react-router-dom"

export const MovieGallery = ({ movies }) => {
    const location= useLocation()
      
  
    if (!movies) return;
     
    return (
        
      <ul className="MovieGallery">
        {movies.map(movie => {
    return (
        <li className="MovieItem"
        id={movie.id}
          key={movie.id}>
            <NavLink to={`${movie.id}`} state={{ from: location }} className='Links'>
          {movie.title} 
          </NavLink>
        </li>
        )
          })}
        
        
         </ul>


    )

  }
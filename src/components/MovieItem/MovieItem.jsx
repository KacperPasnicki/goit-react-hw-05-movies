


        
import {React, Link} from 'react'
import { useLocation } from "react-router-dom";
const MovieItem = ({
id,
title,
movie
}) => {
  const location = useLocation();
  return (
   <b>
    <Link to={`${movie.id}`} location={location}>
    {title}
    </Link>
    </b>

  )
}

export default MovieItem



        // ImageGalleryItem.propTypes = {
        //     images: PropTypes.array.isRequired,
        //     onCLick: PropTypes.func.isRequired
        //       }
        
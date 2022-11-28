import { useState, useEffect } from "react";
import {fetchDetails} from '../API/API'

export const useFetchDetails = movieId => {
    const [movie, setMovie] = useState(null);
  
    useEffect(() => {
      if (movieId) 
      fetchDetails(movieId).then(res => {
        setMovie({...res});
      });
    }, [movieId]);
    console.log({movieId})
    console.log({movieId})
    return { movie };
  };
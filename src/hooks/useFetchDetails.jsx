import { useState, useEffect } from "react";
import {fetchDetails} from '../API/API'

export const useFetchDetails = (movieId) => {
    const [movie, setMovie] = useState([]);
  
    useEffect(() => {
      if (movieId) 
      fetchDetails(movieId).then(res => {
        setMovie({...res});
      });
    }, [movieId]);
   
    return {movie};
   
  };
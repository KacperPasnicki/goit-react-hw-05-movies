import { useState, useEffect } from "react";
import { fetchCredits } from "API/API";

export const useFetchCredits = (movieId) => {
    const [cast, setCast] = useState([]);
  
    useEffect(() => {
      if (movieId) 
      fetchCredits(movieId).then(res => {
        setCast([...res]);
      });
    }, [movieId]);
    
    
    return {cast};
   
  };
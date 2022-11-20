import axios from "axios";
import { useState, useEffect } from "react";

const API_KEY = '32592fc1c467ab313147df8555d6672d';


export const Trending = () => {
    const [videos, setVideos] =useState([])
    
    
    const fetchTrending = async () => {
    
    const {data} = await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=32592fc1c467ab313147df8555d6672d&include_adult=false')
    
    console.log(data)
    setVideos(data.results);
    
    }

    useEffect(()=> {
    fetchTrending()
    
},[] )
    }
    

    export const fetchSearch = async query => {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
        );
      
        return res.data;
      };

      export const fetchMovieId = async query => {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
        );
      
        return res.data;
      };
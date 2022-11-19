import axios from "axios";
import { useState, useEffect } from "react";

const API_KEY = '?api_key=32592fc1c467ab313147df8555d6672d';
const BASE_URL = 'https://api.themoviedb.org/3';
const MAIN_PAGE_URL = '/trending/all/day';

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
    


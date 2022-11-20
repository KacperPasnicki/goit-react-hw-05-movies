import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { SearchBar } from "components/SearchBar/SearchBar";

import MovieItem from "components/MovieItem/MovieItem"
import { useSearch } from "hooks/useSearch";
import { MovieGallery } from "components/MovieGallery/MovieGallery";



export const SearchMovies = () => {
const [searchParams, setSearchParams] = useSearchParams();
const query = searchParams.get('query') ??'';
const { videos } = useSearch(query)


const handleGetRequest = e => {
    
  e.preventDefault();

  const form = e.currentTarget;
  const inputValue = e.target.elements.inputValue.value.toLowerCase()
  setSearchParams({ query: form.elements.inputValue.value.toLowerCase() })
  
  
  console.log(inputValue)
  form.reset();
};


  

//   useEffect(() => {
    
//   if (query === "") return;
//   try {
//     const fetchMovies = async () => {
//     await axios
//     .get
//     (`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=1&include_adult=false`)
//       .then(res => {
//       setVideos(res => [...res.results])
//     })

//   }
//   console.log(videos)
//   fetchMovies()
  
// }
// catch (error){console.log('error')}  
// },[query])

return (
  <>
  
  <SearchBar
          setSearchValue={handleGetRequest}/>
       
           
          
             <MovieGallery
             videos={videos}
             />
              
                
       
       
  </>

)

}
// https://api.themoviedb.org/3/trending/all/day?api_key=32592fc1c467ab313147df8555d6672d&include_adult=false



// https://api.themoviedb.org/3/search/multi?api_key=32592fc1c467ab313147df8555d6672d&query=${searchValue}&page=${page}&include_adult=false
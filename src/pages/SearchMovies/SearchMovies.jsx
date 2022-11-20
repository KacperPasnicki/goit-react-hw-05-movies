import { useState, useEffect } from "react"
import axios from "axios";
import { SearchBar } from "components/SearchBar/SearchBar";
import { MovieGallery } from "components/MovieGallery/MovieGallery";
import MovieItem from "components/MovieItem/MovieItem"



export const SearchMovies = ({onCLick}) => {
const API_KEY = '32592fc1c467ab313147df8555d6672d'
const [page, setPage] = useState(1);
const [inputValue, setSearchValue] =useState('');
const [videos, setVideos] = useState([]);


const handleGetRequest = e => {
    
  e.preventDefault();
  console.log('submit')
  const form = e.currentTarget;
  const inputValue = e.target.elements.inputValue.value
  setSearchValue(inputValue)
  
  
  console.log(inputValue)
  form.reset();
};


  

  useEffect(() => {
    
  if (inputValue === "") return;
  try {
    const fetchMovies = async () => {
    await axios
    .get
    (`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${inputValue}&page=1&include_adult=false`)
      .then(res => {
      setVideos(videos => [...videos, ...res.results])
    })

  }
  console.log(videos)
  fetchMovies()
  
}
catch (error){console.log('error')}  
},[inputValue,videos])

return (
  <>
  
      <ul className="MovieGallery">
            
          { videos && videos.map((video) =>
            ( <li key={video.id} className="MovieItem" onClick={()=>onCLick(video.id)}>
                <MovieItem
                    
                  id={video.id}
                  title={video.title || video.name}
              
            />
                </li>
              )
              )}
      </ul>
        <SearchBar
          setSearchValue={handleGetRequest}/>
       
  </>

)

}
// https://api.themoviedb.org/3/trending/all/day?api_key=32592fc1c467ab313147df8555d6672d&include_adult=false



// https://api.themoviedb.org/3/search/multi?api_key=32592fc1c467ab313147df8555d6672d&query=${searchValue}&page=${page}&include_adult=false
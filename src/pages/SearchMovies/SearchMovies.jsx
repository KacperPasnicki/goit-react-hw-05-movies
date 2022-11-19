import { useState, useEffect } from "react"
import axios from "axios";

export const SearchMovies = () => {

const [page, setPage] = useState(1);
const [searchValue, setSearchValue] =useState('');
const [videos, setVideos] = useState();
const [numOfPages, setNumOfPages] =useState();


const fetchSearch = async () => {
  const {data} = await axios.get
  (`https://api.themoviedb.org/3/search/multi?api_key=32592fc1c467ab313147df8555d6672d&query=${searchValue}&page=${page}&include_adult=false`)
    
  console.log(data)
  setVideos(data.results);
  

  
  }

  useEffect(()=> {
    window.scroll(0,0)
    fetchSearch()
  
},[page] )

return (
    <header className="Searchbar">
    <form className='SearchForm' 
    // onSubmit={handleGetRequest}
   >
      <label >
      <input
      className='SearchForm-input'
      name='inputValue'
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search movies and TV shows"
      onSubmit={(e) => setSearchValue(e.target.value)}
      />
      </label>
      <label>
      <button className='SearchForm-button' type="submit">&rArr;</button>
      </label>
   
  
      
    </form>
    </header>

)

}
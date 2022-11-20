
export  const SearchBar = ({setSearchValue}) => {


    return (

<header className="Searchbar">
    <form className='SearchForm' 
    onSubmit={(e) => setSearchValue}
   >
      <label >
      <input
      className='SearchForm-input'
      name='inputValue'
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search movies and TV shows"
      
      />
      </label>
      <label>
      <button className='SearchForm-button' type="submit">&rArr;</button>
      </label>
   
  
      
    </form>
    </header>


    )




}
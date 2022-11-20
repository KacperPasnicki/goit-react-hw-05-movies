
export  const SearchBar = ({setSearchValue}) => {


    return (

<header className="Searchbar">
    <form className='SearchForm' 
    onSubmit={setSearchValue}
   >
      <label >
      <input
      className='SearchForm-input'
      name='inputValue'
      type="text"
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
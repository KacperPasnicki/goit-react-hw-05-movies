import PropTypes from 'prop-types'
import css from './SearchBar.module.css'

export const SearchBar = ({ setSearchValue }) => {
  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={setSearchValue}>
        <label>
          <input
            className={css.SearchFormInput}
            name="inputValue"
            type="text"
            placeholder="Search movies and TV shows"
          />
        </label>
        <label>
          <button className={css.SearchFormButton} type="submit">
            &rArr;
          </button>
        </label>
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  setSearchValue: PropTypes.func.isRequired
}
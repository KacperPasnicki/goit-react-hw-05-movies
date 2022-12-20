import { useSearchParams } from 'react-router-dom';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useSearch } from 'hooks/useSearch';
import { lazy } from 'react';

const MovieGallery = lazy(() => import('components/MovieGallery/MovieGallery'));

const SearchMovies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const { movies } = useSearch(query);

  const handleGetRequest = e => {
    e.preventDefault();

    const form = e.currentTarget;
    setSearchParams({ query: form.elements.inputValue.value.toLowerCase() });
    form.reset();
  };

  return (
    <>
      <SearchBar setSearchValue={handleGetRequest} />
      <MovieGallery movies={movies} />
    </>
  );
};

export default SearchMovies;

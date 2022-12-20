import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Navbar } from './Navbar/Navbar';

const StartPage = lazy(() => import('pages/startPage/StartPage'));
const SearchMovies = lazy(() => import('pages/SearchMovies/SearchMovies'));
const MovieDetails = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage')
);
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const NotFound = lazy(() => import('components/NotFound/NotFound'));
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<StartPage />} />
        <Route path="/goit-react-hw-05-movies" element={<StartPage />} />
        <Route path="movies" element={<SearchMovies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
};

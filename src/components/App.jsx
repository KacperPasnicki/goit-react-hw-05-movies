
import {lazy} from "react";
import { BrowserRouter,  Routes, Route, Router } from "react-router-dom";

import { Navbar } from "./Navbar/Navbar";

const  StartPage = lazy(() => import("pages/startPage/StartPage"))
const SearchMovies  = lazy(() => import("pages/SearchMovies/SearchMovies"));
const MovieDetails = lazy(() => import("pages/MovieDetailsPage/MovieDetailsPage"))

export const App = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<StartPage/>}/>
          <Route path="movies" element={<SearchMovies/>} />
          <Route path="movies/:movieId" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast/>}/>
            <Route path="reviews" element={<Reviews/>}/>
            <Route/>
          </Route>
          </Route>
      </Routes>
      
    
  );
};

/*/
<Route path="/Movies:movieId" element={<SearchMovies/>} />/*/
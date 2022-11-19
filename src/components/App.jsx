import axios from "axios";
import React, {useEffect, useState} from "react";
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import { MovieGallery } from "./MovieGallery/MovieGallery";
import { Navbar } from "./Navbar/Navbar";
import { Trending } from "./API/API";
import MovieItem from "./MovieItem/MovieItem";
import { StartPage } from "pages/startPage/StartPage";
import { SearchMovies } from "pages/SearchMovies/SearchMovies";


export const App = () => {
  return (
    <BrowserRouter>
    <>
    <Navbar></Navbar>
    <div
     className="App">
      <Routes>
        <Route path='/' element={<StartPage/>} />
        <Route path="/Movies" element={<SearchMovies/>} />

      </Routes>
    </div>
    </>
    </BrowserRouter>
  );
};

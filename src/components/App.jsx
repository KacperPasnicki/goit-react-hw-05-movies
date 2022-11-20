
import React from "react";
import { BrowserRouter,  Routes, Route } from "react-router-dom";

import { Navbar } from "./Navbar/Navbar";

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
        <Route path="/Movies:movieId" element={<SearchMovies/>} />
      </Routes>
    </div>
    </>
    </BrowserRouter>
  );
};

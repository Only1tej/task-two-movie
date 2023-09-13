import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import MovieDetails from "./pages/MovieDetails";

const API_URL = "https://api.themoviedb.org/3/movie/{movie_id}";
const API_SEARCH =
  "https://api.themoviedb.org/3/movie/popular?api_key=986c9935e1e74f8333fab79bb69892a9&query";

function App() {
  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   fetch(API_SEARCH)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setMovies(data.results);
  //     });
  // }, []);

  return (
    <>
      {/* <div>
        <div>
          <Header />
          <div className="grid grid-cols-4 ml-[98px] mt-[161px] mr-[102px] mb-[147px] ">
            {movies.map((movieReq) => (
              <Home key={movieReq.id} {...movieReq} />
            ))}
          </div>
          <Footer />
        </div>
      </div> */}
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/home" element={<Home />} />
            <Route path="/movies/:movieId" element={<MovieDetails />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

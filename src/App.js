import React, { useState, useEffect } from "react";

import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

const API_URL = "https://api.themoviedb.org/3/movie/{movie_id}";
const API_SEARCH =
  "https://api.themoviedb.org/3/movie/popular?api_key=986c9935e1e74f8333fab79bb69892a9&query";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_SEARCH)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <div>
      <div>
        <Header />
        {movies.map((movieReq) => (
          <Home key={movieReq.id} {...movieReq} />
        ))}
        <Footer />
      </div>
    </div>
  );
}

export default App;

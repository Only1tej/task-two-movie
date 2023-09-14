import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home';
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../App.css";
import MovieDetails from "../pages/MovieDetails";

const API_URL = "https://api.themoviedb.org/3/movie/{movie_id}";
const API_SEARCH =
    "https://api.themoviedb.org/3/movie/popular?api_key=986c9935e1e74f8333fab79bb69892a9&query";
const API_SEARCH1 =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=986c9935e1e74f8333fab79bb69892a9&query";

// fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
function Intro({ }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(API_SEARCH1)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMovies(data.results);
            })
            .catch((error) => console.error(error));
    }, []);

    const slicedMovies = movies.slice(0, 10)
    return (
        <>
            <div>
                <div>
                    <Header />
                    {/* <div className="grid grid-cols-4 ml-[98px] mt-[161px] mr-[102px] mb-[147px] ">
                        {movies.map((movie) => (
                            <Home key={movie.id} {...movie} />
                        ))}
                    </div> */}
                    <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 ml-[98px] mt-[161px] mr-[102px] mb-[147px] ">
                        {slicedMovies.map((movie) => (
                            <div>
                                <a href={`/movies/${movie.id}`}>
                                    <Home key={movie.id} {...movie} />
                                </a>
                                {/* < Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                                <Home key={movie.id} {...movie} /> */}
                            </div>
                        ))}
                    </div>
                    {/* <div className="grid grid-cols-4 ml-[98px] mt-[161px] mr-[102px] mb-[147px] ">

                        <Home {...movies} />

                    </div> */}
                    <Footer />
                </div>
            </div >
        </>
    );
}

export default Intro;

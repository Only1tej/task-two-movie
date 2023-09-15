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
    if (!movies) {
        return (
            <div className="loadingSpinnerContainer">
                <div className="loadingSpinner"></div>
            </div>
        )
    }
    console.log(movies);
    const slicedMovies = movies.slice(0, 10)
    return (
        <>
            <div>
                <div>
                    <Header />
                    <h1 className="font-regular text-4xl font-bold mt-[70px] ml-[98px]">Featured Movie</h1>
                    <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 ml-[98px] mt-[100px] mr-[102px] mb-[147px] ">
                        {slicedMovies.map((movie) => (
                            <div>

                                <Link to={`/movies/${movie.id}`}>
                                    <Home key={movie.id} {...movie} />
                                </Link>
                            </div>
                        ))}
                    </div>
                    <Footer />
                </div>
            </div >
        </>
    );
}

export default Intro;

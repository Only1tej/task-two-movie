import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import '../index.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import imdb from '../assets/IMDB.jpg'
import png from '../assets/PngItem_1381056 1.jpg'



const API_IMG = 'https://image.tmdb.org/t/p/w500/'
const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=<<api_key_here>>&query";

// const API_URL = "https://api.themoviedb.org/3/movie/{movie_id}";
// const API_SEARCH =
// "https://api.themoviedb.org/3/movie/popular?api_key=986c9935e1e74f8333fab79bb69892a9&query";



const Home = ({ title, release_date, popularity, poster_path, overview, vote_average }) => {
    const { movieId } = useParams()
    const navigate = useNavigate()
    const movieDetails = () => {
        navigate('/movies/:movieId')
    }

    // const [movies, setMovies] = useState([]);

    // useEffect(() => {
    //     fetch(API_SEARCH)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             setMovies(data.results);
    //         });
    // }, []);

    return (
        <div>
            {/* <Header /> */}
            <div className='w-[250px] h-[490px] mb-[103px] sm:grid' onClick={movieDetails}>
                <div>
                    <img src={API_IMG + poster_path} alt="img" className='w-[250px] h-[370px]' />
                </div>
                <p className='text-xs font-bold font-regular my-[12px]'>{release_date}</p>
                <h1 className='text-lg font-bold font-regular mb-[12px]'>{title}</h1>
                <div className='flex space-x-[50px] w-[250px]'>
                    <div className='flex flex-row  w-[101px] h-[17px] '>
                        <img src={imdb} alt="imdb" className='w-[35px] h-[17px] mr-[10px]' />
                        <span className='flex items-center'>{vote_average}/10</span>
                    </div>
                    <div className='flex flex-row  w-[49px] h-[17px]'>
                        <img src={png} alt="png" className='w-[16px] h-[17px] mr-[10px]' />
                        <span className='flex items-center'>{popularity}</span>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div >
    )
}

export default Home
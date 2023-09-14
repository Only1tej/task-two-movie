import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { faHeart, fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../index.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import imdb from '../assets/IMDB.jpg'
import png from '../assets/PngItem_1381056 1.jpg'
import heart from '../assets/Heart.png'

const API_IMG = 'https://image.tmdb.org/t/p/w500/'
const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=<<api_key_here>>&query";

// const API_URL = "https://api.themoviedb.org/3/movie/{movie_id}";
// const API_SEARCH =
// "https://api.themoviedb.org/3/movie/popular?api_key=986c9935e1e74f8333fab79bb69892a9&query";



const Home = ({ title, release_date, popularity, poster_path, overview, vote_average }) => {
    const [color, setColor] = useState(false)
    const { movieId } = useParams()
    const navigate = useNavigate()
    // const movieDetails = () => {
    //     navigate('/movies/:movieId')
    // }
    // const [inputDate, setInputDate] = useState("2023-09-13T10:30:00");
    // const [utcDate, setUTCDate] = useState("");

    //     const handleConvertToUTC = () => {
    //         const inputDateObj = new Date(inputDate);
    //         const utcDateString = inputDateObj.toUTCString();
    //         setUTCDate(utcDateString);
    //     };

    //     return (
    //         <div>
    //             <label>Input Date:</label>
    //             <input
    //                 type="text"
    //                 value={inputDate}
    //                 onChange={(e) => setInputDate(e.target.value)}
    //             />
    //             <button onClick={handleConvertToUTC}>Convert to UTC</button>
    //             {utcDate && (
    //                 <div>
    //                     <label>UTC Date:</label>
    //                     <p>{utcDate}</p>
    //                 </div>
    //             )}
    //         </div>
    //     );
    // }
    // const { release_date } = new Date()
    const dateStr = release_date
    const dateObj = new Date(dateStr)
    const utcDate = dateObj.toUTCString()
    console.log(utcDate);

    return (
        <div>
            {/* <Header /> */}
            <div className='flex flex-row w-[250px] h-[490px] mb-[70px] sm:grid'>
                <div>
                    <span className='relative z-10 top-8 -right-[210px] hover:bg-red-900 bg-red-500 rounded-full'><FontAwesomeIcon icon={faHeart} style={{ color: "#ee1132", width: '2rem', height: '1rem' }} /></span>
                    <img src={API_IMG + poster_path} alt="img" className='absolute w-[250px] h-[370px]' />
                </div>
                <div className='mt-[390px]'>
                    <p className='text-xs font-bold font-regular my-[12px]'>{utcDate}</p>
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
            </div>
            {/* <Footer /> */}
        </div >
    )
}

export default Home
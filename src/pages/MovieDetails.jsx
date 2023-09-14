import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import tvSeries from '../assets/TV Show.png'
import tv from '../assets/tv.jpg'
import home from '../assets/Home.png'
import moviep from '../assets/Movie Projector.png'
import calender from '../assets/Calendar.png'
import logout from '../assets/Logout.png'
import ticket from '../assets/Two Tickets.png'
import list from '../assets/List.png'
import star from '../assets/Star.png'
import play1 from '../assets/Play (1).png'

const MovieDetails = ({ title, release_date, poster_path, vote_average, overview, original_language, popularity }) => {
    const { movieId } = useParams()
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=986c9935e1e74f8333fab79bb69892a9`)
            .then((response) => response.json())
            .then((data) => setMovie(data))
            .catch((error) => console.error(error))
    }, [movieId])

    if (!movie) {
        return <div>Loading...</div>
    }

    return (
        <div className='w-[1512px] h-[982px] flex flex-row'>
            <div className='w-[226px] h-[982px] bg-white outline outline-1 outline-slate-400 rounded-r-[45px] mr-[37px]'>
                {/* Sidebar */}
                <div className='flex flex-row mx-[20px] mt-[52px] w-[186px] h-[50px]'>
                    <img src={tv} alt="tv" className='w-[50px] h-[50px]' />
                    <p className='text-[#333] font-regular flex items-center ml-[24px]'>MovieBox</p>
                </div>
                <div className='flex flex-row justify-center items-center w-[226px] h-[86px]'>
                    <img src={home} alt="home" className='w-[25px] h-[25px] ml-[42px] mr-[15px]' />
                    <p className='mr-[72px] my-[28px] font-poppin text-xl font-semibold text-[#666]'>Home</p>
                </div>
                <div className='flex flex-row justify-center items-center w-[226px] h-[86px]  bg-[#F8E7EB]  border-[#BE123C] border-r-4'>
                    <img src={moviep} alt="movie" className='w-[25px] h-[25px] ml-[42px] mr-[15px]' />
                    <p className='mr-[72px] my-[28px] font-poppin text-xl font-semibold text-[#BE123C]'>Movies</p>
                </div>
                <div className='flex flex-row justify-center items-center w-[226px] h-[86px]'>
                    <img src={tvSeries} alt="tvSeries" className='w-[25px] h-[25px] ml-[42px] mr-[15px]' />
                    <p className='mr-[72px] my-[28px] font-poppin text-xl font-semibold text-[#666]'>TV Series</p>
                </div>
                <div className='flex flex-row justify-center items-center w-[226px] h-[86px]'>
                    <img src={calender} alt="calender" className='w-[25px] h-[25px] ml-[42px] mr-[15px]' />
                    <p className='mr-[72px] my-[28px] font-poppin text-xl font-semibold text-[#666]'>Upcoming</p>
                </div>
                <div className='mx-[28px] mt-[50px] bg-[#F8E7EB]  outline outline-1 rounded-[20px] border-[#BE123C] w-[170px] h-[210px]'>
                    <div className='pt-[42px] pl-[16px] pr-[17px]'>
                        <p className='text-[#333333] text-[15px] font-extrabold font-poppin'>Play movie quizes and earn free tickets </p>
                    </div>
                    <div className='pr-[16px] pl-[15px] pt-[9px]'>
                        <p className='text-[#666] text-xs font-medium font-poppin'>50k people are playing now</p>
                    </div>
                    <div className='w-[112px] h-[30px] bg-[#eea2b5] rounded-[30px] mx-[29px] mb-[16px]'>
                        <p className='py-[6px] px-[17px] text-xs text-[#BE123C;] font-medium font-poppin'>Start playing</p>
                    </div>
                </div>
                <div className='flex flex-row justify-center items-center w-[226px] h-[86px]'>
                    <img src={logout} alt="logout" className='w-[25px] h-[25px] ml-[42px] mr-[15px]' />
                    <p className='mr-[72px] my-[28px] font-poppin text-xl font-semibold text-[#666]'>Logout</p>
                </div>
            </div>
            <div>
                {/* Movie details */}
                <div className='mt-[38px]'>
                    {/*  <span className='relative z-10 top-8 -right-[210px] hover:bg-red-900 bg-red-500 rounded-full'><FontAwesomeIcon icon={faHeart} style={{ color: "#ee1132", width: '2rem', height: '1rem' }} /></span>
                    <img src={API_IMG + poster_path} alt="img" className='absolute w-[250px] h-[370px]' /> */}
                    {/* trailer */}
                    {/* <iframe width="1198" height="449" src="https://www.youtube.com/embed/_kYd_" className='rounded-[20px]'></iframe> */}
                    <span className='relative z-20 top-[250px] -right-[580px]'><img src={play1} alt="play" /></span>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className=' w-[1198px] h-[449px]' />
                </div>
                <div className='flex flex-column'>
                    <div>
                        <div>
                            <p className='text-4xl font-poppin font-semibold mt-3' data-testid='movie-title'>{movie.title}</p>
                            <p className='text-xl font-medium font-poppin' data-testid='movie-release-date'>{movie.release_date}</p>
                        </div>
                        <div className='w-[774px] h-[90px]'>
                            {/* review and casting */}
                            <p className='text-2xl font-poppin font-semibold mt-3'>Overview</p>
                            <p className='text-xl font-normal font-poppin mt-4' data-testid='movie-overview'>{movie.overview}</p>
                            <p className='w-[300px] bg-[#BE123C] pt-[13px] pb-[12px] px-[86px] my-[18px] rounded-[10px] font-poppin font-bold text-white' >LANGUAGE: {movie.original_language.toUpperCase()}</p>
                            <p className='w-[300px] bg-[#BE123C] pt-[13px] pb-[12px] px-[66px] mb-[12px] rounded-[10px] font-poppin font-bold text-white'>POPULARITY: {movie.popularity}</p>
                        </div>
                    </div>
                    <div className='flex flex-column'>


                        <div className='w-[360px] ml-[26px] mr-[71px]'>
                            <div className='flex flex-row justify-end mb-[24px] mt-[29px]'>
                                <img src={star} alt="star" className='w-[30px] h-[30px] mr-1' />
                                <span className='flex items-center font-poppin font-bold text-[#E8E8E8]'>{movie.vote_average}/10</span>
                            </div>
                            {/* showtime buttons */}
                            <div className='flex flex-row w-[360px] h-[55px] bg-[#BE123C] pt-[13px] pb-[12px] px-[86px] mb-[12px] rounded-[10px]'>
                                <img src={ticket} alt="ticket" className='w-[25px] h-[25px] mr-[10px] ' />
                                <p className='font-poppin font-medium text-xl text-white'>See Showtimes</p>
                            </div>
                            <div className='flex flex-row w-[360px] h-[55px] bg-[#F8E7EB] pt-[13px] pb-[12px] px-[63px] rounded-[10px] outline outline-1 border-[#BE123CB2] '>
                                <img src={list} alt="list" className='w-[25px] h-[25px] mr-[12px] ' />
                                <p className='font-poppin font-medium text-md'>More Options to Watch</p>
                            </div>
                            {/* image of the next three films to follow */}
                            <img src="" alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails
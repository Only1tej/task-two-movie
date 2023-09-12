import React from 'react'
import '../index.css'
import tv from '../assets/tv.jpg'
import background from '../assets/background-image.jpeg'
import hamburger from '../assets/Ellipse 1.jpg'
import imdb from '../assets/IMDB.jpg'
import png from '../assets/PngItem_1381056 1.jpg'
import play from '../assets/Play.png'

const Header = () => {
    // const myStyle = {
    //     backgroundImage: `url${background}`,
    //     // height: '100vh',
    //     // marginTop: '-70px',
    //     // fontSize: '50px',
    //     // backgroundSize: 'cover',
    //     // backgroundRepeat: 'no-repeat'
    // }

    // const styles = {
    //     header: {
    //         backgroundImage: `url${background}`,
    //         height: '100vh',
    //         backgroundPosition: 'center',
    //         backgroundRepeat: 'no-repeat',
    //         backgroundSize: 'cover'
    //     },

    //     content: {
    //         height: '100%',
    //         width: '100%',
    //         backgroundColor: 'rgba(0, 0, 0, 0.5)',
    //         color: 'white'
    //     }
    // }





    return (
        <div>
            <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: 600 }} className=' text-white w-full h-[600px] font-regular'>
                <div className=' flex flex-row'>
                    {/* Navbar */}
                    <div className='flex flex-row ml-[95px] mt-[15px] w-[186px] h-[50px]'>
                        <img src={tv} alt="tv" className='w-[50px] h-[50px]' />
                        <p className='text-white font-regular flex items-center ml-[24px]'>MovieBox</p>
                    </div>
                    <div className='ml-[212px] mt-[22px] '>
                        <input type="text" placeholder='What do you want to watch?' className='w-[525px] py-[6px] px-[10px] text-white placeholder-color outline-[#D1D5DB] outline outline-2 rounded-md  bg-transparent' />
                    </div>
                    <div className='flex flex-row items-center w-[114px] h-[36px] ml-[210px] mt-[22px] mr-[98px]'>
                        <a href="#" className=' mr-[27px] text-white font-bold'>Sign In</a>
                        <img src={hamburger} alt="hamburger" className='w-[36px] h-[36px]' />
                    </div>
                </div>
                <div className='w-[404px] h-[285px] mt-[78px] ml-[98px]'>
                    {/* background text */}
                    <div>
                        <h1 className='font-regular font-bold text-white text-5xl leading-[56px]'>John Wick 3 : Parabellum</h1>
                    </div>
                    <div className='flex flex-row my-[16px] space-x-[34px]'>
                        <div className='flex flex-row w-[101px] h-[17px] space-x-[10px]'>
                            <img src={imdb} alt="IMDB" className='w-[35px] h-[17px]' />
                            <p className='flex items-center'>86.0/100</p>
                        </div>
                        <div className='flex flex-row w-[49px] h-[17px] space-x-[10px]'>
                            <img src={png} alt="png" className='w-[16px] h-[17px]' />
                            <p className='flex items-center'>97%</p>
                        </div>
                    </div>
                    <div className='mb-[16px] w-[302px] h-[72px]'>
                        <p className='font-regular font-medium text-sm'>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
                    </div>
                    <div className="flex flex-row bg-[#BE123C] w-[169px] h-[36px] rounded-md">
                        <img src={play} alt="play" className='w-[20px] h-[20px] ml-[16px] self-center' />
                        <button className='ml-[8px] nr-[16px] font-regular text-sm leading-6 font-bold text-white'>WATCH TRAILER</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header
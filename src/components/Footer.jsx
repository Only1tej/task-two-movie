import React from 'react'
import '../index.css'
import facebook from '../assets/fa-brands_facebook-square.jpg'
import instagram from '../assets/fa-brands_instagram.jpg'
import twitter from '../assets/fa-brands_twitter.jpg'
import youtube from '../assets/fa-brands_youtube.jpg'

const Footer = () => {
    return (
        <>
            <div>
                <div className="ml-[467px] mr-[481px] w-[492px] h-[145px] space-y-[36px] font-regular">
                    <div className="flex flex-row justify-center">
                        {/* Socials */}
                        <img src={facebook} alt="facebook" />
                        <img src={instagram} alt="instagram" className="ml-[48px]" />
                        <img src={twitter} alt="twitter" className="ml-[48px]" />
                        <img src={youtube} alt="youtube" className="ml-[48px]" />
                    </div>
                    <div className="flex justify-center no-underline">
                        {/* Links */}
                        <a href="#">Conditions of Use</a>
                        <a href="#" className="ml-[48px]">
                            Privacy & Policy
                        </a>
                        <a href="#" className="ml-[48px]">
                            Press Room
                        </a>
                    </div>
                    <div className="flex justify-center">
                        {/* Copyrights */}
                        <p>© 2021 MovieBox by Adriana Eka Prayudha </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
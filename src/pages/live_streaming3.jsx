import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import video from "../assets/video.png";
import videospan from "../assets/videospan.png";



const Livestream3 = () => {
    return (
        <div>
            
           
            <div className='guestlist-container mt-4 items-center'>
            
            <div className='ml-10 flex items-center gap-6'><NavLink to="/live_streaming2"><FaArrowLeft size={30} /></NavLink>
            <h1 className='font-Playfair text-[20px] md:text-[30px]'>Livestream</h1></div>
            <div className='flex justify-center items-center gap-4 md:gap-16 mt-16'>
            <div className='gap-10 w-[90%] md:w-[500px] flex flex-col md:flex-row justify-center pb-10'>
                <img className='w-[100%] h-[100%] cursor-pointer' src={video} alt="Video" />
                <img className='w-[100%] h-[100%] cursor-pointer' src={videospan} alt="Video span" />
            </div>
            </div>
            
            
            </div>
           
            </div>


);
};

export default Livestream3;

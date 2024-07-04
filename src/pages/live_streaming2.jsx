import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";


const Livestream2 = () => {
    return (
        <div>
            <div className='flex items-center gap-4 md:gap-16 ml-10 mt-6'>
            <NavLink to="/live_streaming"><FaArrowLeft size={30} /></NavLink>
            <h1 className='font-Playfair text-[20px] md:text-[30px]'>Your events</h1>
            
            </div>
            <div className='guestlist-container mt-4 flex justify-center'>
            
            </div>

            <div className='flex flex-col justify-center gap-6 md:gap-24 mt-[4rem] md:mt-[4rem]'>
            
            <div className='gap-2 mb-6 flex flex-col justify-center items-center text-left border-[#F69A22] border-[1.9px] font-semibold px-4 rounded-xl py-[3rem] w-[80%] md:w-[700px] m-auto'>
                <p className='font-Lato'>Event Details</p>
                <p className='font-Playfair'>Chloe & Alfred's wedding</p>
                <p className='font-Lato'>Date: 20th June, 2024</p>
                <p className='font-Lato'>Time: 11am</p>
                <p className='font-Lato'>Venue: Eco hotel and Suites</p>
            </div>
            
            <button className='m-auto bg-[#174C4D] px-28 py-[1rem] rounded-lg text-white'><NavLink to="/live_streaming3">Join livestream</NavLink></button>
            
            </div>
        </div>
    );
};

export default Livestream2;

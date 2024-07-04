import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowLeft, FaCircleCheck } from "react-icons/fa6";
import { FiBell } from "react-icons/fi";
import gltable from "../assets/gltable.png";

const Guestlist = () => {
    return (
        <div>
        <div className='guestlist-container mt-4 flex justify-center'>
            <div className='flex items-center gap-4 md:gap-16 justify-center'>
            <NavLink to="/import_contact"><FaArrowLeft size={30} /></NavLink>
            <h1 className='font-Playfair text-[20px] md:text-[30px]'>Guest list</h1>
            
            <div className='flex cursor-pointer items-center gap-2 md:gap-4'>
            <span className='text-[#e4d281]'><FaCircleCheck size={25} /></span><span className='font-Lato text-[17px] md:text-[20px] font-semibold hover:text-[#F69A22]'><NavLink to="/create_invite_link">Create Invite Link</NavLink></span>
            <span><FiBell size={25} /></span>
            </div>
            
        </div>
        </div>

        <div className='mt-10 w-[90%] m-auto'>
            <img src={gltable} alt="Guest list table" />
        </div>
            <div className='py-8 flex justify-center gap-6 md:gap-24 mt-[10rem] md:mt-[4rem]'>
            <button className='bg-[#174C4D] px-4 rounded-lg py-[0.7rem] text-white'><NavLink to="/rsvp">Add guest</NavLink></button>
            
            <button className='border-[#F69A22] border-[1.9px] text-[#F69A22] font-semibold px-4 rounded-lg py-[0.7rem]'><NavLink to="/import_contact">Import contact</NavLink></button>
            </div>
            

        </div>
    );
};

export default Guestlist;

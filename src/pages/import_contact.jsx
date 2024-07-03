import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowLeft, FaPlus } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";

const Import = () => {
    return (
        <div className='import-container flex justify-center items-center font-Lato'>
            <div className='mt-4'>
            <div className='flex items-center gap-12 md:gap-24'>
            <NavLink to="/rsvp"><FaArrowLeft size={30} /></NavLink>
            <h1 className='font-Playfair text-[24px] md:text-[30px]'>Import Contact</h1>
            </div>
            
            <div className='border-[1px] border-[#8d8888] hover:border-[#F69A22] w-[700px] cursor-pointer py-4 rounded-lg mt-10 text-center flex justify-center gap-4'>
            <span><FcGoogle size={30} className='' /></span><span>Import with google</span>
            </div>
           

            <div className='border-[1px] border-[#8d8888] hover:border-[#F69A22] w-[700px] cursor-pointer py-4 rounded-lg mt-10 text-center flex justify-center gap-4'>
            <span><IoLogoApple size={30} className=''/></span><span>Import with apple</span>
            </div> 
           

            <div className='border-[1px] border-[#8d8888] hover:border-[#F69A22] w-[700px] cursor-pointer py-4 rounded-lg mt-10 text-center flex justify-center gap-4'>
            <span><FaPlus size={30} className=''/></span><span>Add manually</span>
            </div> 
            

            <div className='flex justify-center mt-20'>
            <button className='bg-[#174C4D] px-20 rounded-lg py-[0.7rem] text-white text-[17px]'><NavLink to="/guest_list">View guest list</NavLink></button>
                </div>
            
            </div>
            </div>
    );
};

export default Import;

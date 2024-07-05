import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import demovideo from "../assets/e-invite2imgs/demovideo.mp4";



const Livestream3 = () => {

    const copyLink = () => {
        alert('Message sent!');
    }
    return (
        <div>
            
           
            <div className='guestlist-container mt-4 items-center'>
            
            <div className='ml-10 flex items-center gap-6'><NavLink to="/live_streaming2"><FaArrowLeft size={30} /></NavLink>
            <h1 className='font-Playfair text-[20px] md:text-[30px]'>Livestream</h1></div>
            <div className='flex justify-center items-center gap-4 md:gap-16 mt-16'>
            <div className='gap-10 w-[90%] md:w-[500px] flex flex-col md:flex-row justify-center pb-10'>
            <video src={demovideo} width="600" height="400" controls="controls" autoplay="false" />
                
                <div className='bg-[#efeff7] border-[1px] border-[#8a8d8c] rounded-2xl'>
                    <textarea name="text" id="text" placeholder='Type your message.....' cols={40} rows={2} className='mt-80 ml-8 bg-transparent border-[1px] border-black rounded-lg'></textarea>
                    <div className='flex gap-2 mt-16 ml-32 mb-4'>
                        <p className='font-Lato font-extrabold cursor-pointer'>Reaction icons</p>
                        <button onClick={copyLink} className='font-Lato bg-[#023d3d] px-6 py-2 text-white rounded-lg'>Send</button>
                    </div>
                </div>
            </div>
            </div>
            
            
            </div>
           
            </div>


);
};

export default Livestream3;

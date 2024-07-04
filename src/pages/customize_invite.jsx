import React from 'react';
import { HiOutlineArrowLeft } from "react-icons/hi";
import PartyImg from '../assets/letsparty.png';
import { IoMdColorFilter, IoIosArrowDown } from "react-icons/io";
import { PiTextTBold } from "react-icons/pi";
import { RiLayout5Line } from "react-icons/ri";
import { BsFillKeyboardFill } from "react-icons/bs";
import { PiTextAaBold } from "react-icons/pi";
import { CgFormatLineHeight } from "react-icons/cg";
import { LuUploadCloud } from "react-icons/lu";
import {NavLink} from 'react-router-dom';

const CustomizeInvite = () => {
    return (
        <>
          <div className='mt-11 ml-14 font-Inter'>

              <div className='flex gap-7 items-center mb-10 '>
              <NavLink to="/e-invite2">
                      <HiOutlineArrowLeft size={30} className=' text-[#023d3d] mr-6 ' /> </NavLink>
              <p className='font-bold text-[28px] '>Customize Invite</p>
            </div>

            <img src={PartyImg} alt="Let's Party" className='w-[300px] h-[300px] mb-10 ml-16 ' />
        
            <div className='flex flex-wrap w-[440px] gap-7 mb-8 '>
                <div className='border-2 border-orange-600  w-[200px] h-11 rounded-md flex items-center justify-around font-medium text-neutral-700'>
                    <IoMdColorFilter size={22} />
                    <p>Edit color</p>
                    <IoIosArrowDown size={20} className='cursor-pointer' />
                </div>
                <div className='border-2 border-orange-600  w-[200px] h-11 rounded-md flex items-center justify-around font-medium text-neutral-700'>
                    <PiTextTBold size={38} />
                    <p>Change font</p>
                    <IoIosArrowDown size={20} className='cursor-pointer' />
                </div>
                <div className='border-2 border-orange-600  w-[200px] h-11 rounded-md flex items-center justify-around font-medium text-neutral-700 cursor-pointer'>
                <RiLayout5Line size={30} />
                    <p className='pr-4'>Change layout</p>
                </div>
                <div className='border-2 border-orange-600  w-[200px] h-11 rounded-md flex items-center justify-around font-medium text-neutral-700 cursor-pointer'>
                <BsFillKeyboardFill size={28} className='text-black' />
                    <p className='pr-4 '>Edit Text</p>
                    <p></p>
                </div>
                <div className='border-2 border-orange-600  w-[200px] h-11 rounded-md flex items-center justify-around font-medium text-neutral-700'>
                    <PiTextAaBold size={28} className='text-black' />
                    <p>Change Size</p>
                    <IoIosArrowDown size={20} className='cursor-pointer' />
                </div>
                <div className='border-2 border-orange-600  w-[200px] h-11 rounded-md flex items-center justify-around font-medium text-neutral-700'>
                    <CgFormatLineHeight size={30} />
                    <p>Change spacing</p>
                    <IoIosArrowDown size={20} className='cursor-pointer' />
                </div>
            </div>
            
            <div className='mb-8 relative'>
            <p className='font-medium mb-2'>Media upload</p>
            <p className='rounded-md border-2 w-[440px] h-[150px] border-orange-600'></p>
            <LuUploadCloud size={36} className='absolute left-52 text-neutral-500 bottom-12 cursor-pointer' />
            </div>

            <div className='rounded-sm flex mb-10'>
                <button className='text-white font-Lato bg-[#023d3d] px-auto py-2 w-48 mr-16 rounded-lg '>Preview</button>
                <button className='border-orange-600 text-amber-500 border rounded-lg px-auto py-2 w-48 mr-2 font-Lato '>Save</button>
            </div>

            </div>  
        </>
    );
};

export default CustomizeInvite;

import React from 'react';
import { HiOutlineArrowLeft } from "react-icons/hi";
import Wedding from '../assets/e-invite2imgs/1.png';
import BabyShower from '../assets/e-invite2imgs/2.png';
import BridalShower from '../assets/e-invite2imgs/3.png';
import Birthday from '../assets/e-invite2imgs/4.png';
import Hangout from '../assets/e-invite2imgs/5.png';
import Upload from '../assets/e-invite2imgs/6.png';
import { Link } from 'react-router-dom';

const CreateInvitation = () => {
    return (
        <>
            <div className='px-6 mt-10 font-Inter ml-2'>
                <div className='flex items-center gap-7 mb-8'>
                <Link to="/">
                <HiOutlineArrowLeft size={36} className=' text-[#023d3d] cursor-pointer mr-4 ' /> </Link>
                    <p className='font-bold font-Inter text-[28px] mobile:text-[18px]'>Create E-invite</p>
                </div>

                <div className='grid grid-cols-2 gap-4 w-[96%] md:w-[400px] text-[10px] cursor-pointer'>
                    <div>
                        <p className='mb-0.5 text-[17px] font-medium  mobile:text-[13px]'>Wedding</p>
                        <img src={Wedding} alt="Wedding" className='hover:w-44 hover:h-36 w-40 h-32 mobile:w-[126px] mobile:h-24 rounded-md' />
                    </div>
                    
                    <div>
                        <p className='mb-0.5 text-[17px] font-medium mobile:text-[13px]'>Baby Shower</p>
                        <img src={BabyShower} alt="Baby Shower" className='hover:w-44 hover:h-36 w-40 h-32 mobile:w-[126px] mobile:h-24 rounded-md' />
                    </div>
                    
                    <div>
                        <p className='mb-0.5 text-[17px] font-medium  mobile:text-[13px]'>Bridal Shower</p>
                        <img src={BridalShower} alt="Bridal Shower" className='hover:w-44 hover:h-36 w-40 h-32 mobile:w-[126px] mobile:h-24 rounded-md' />
                    </div>
                    
                    <div>
                        <p className='mb-0.5 text-[17px] font-medium  mobile:text-[13px]'>Birthday</p>
                        <img src={Birthday} alt="Birthday" className='hover:w-44 hover:h-36 w-40 h-32 mobile:w-[126px] mobile:h-24 rounded-md' />
                    </div>
                    
                    <div>
                        <p className='mb-0.5 text-[17px] font-medium  mobile:text-[13px]'>Hangout</p>
                        <img src={Hangout} alt="Hangout" className='hover:w-44 hover:h-36 w-40 h-32 mobile:w-[126px] mobile:h-24 rounded-md' />
                    </div>
                    
                    <Link to="/customize_invite">
                    <div>
                        <p className='mb-1 text-[15px] mobile:text-[13px] font-medium '>Upload Your Design</p>
                        <img src={Upload} alt="Upload Your Own Design" className='hover:w-44 hover:h-36 w-40 h-32 relative mobile:w-[126px] mobile:h-24 rounded-2xl' />
                        <p className='font-medium absolute bottom-[18px] left-[250px] md:left-[280px] w-[76px] text-[13px] leading-4'>Upload Your Own Design</p>
                    </div>
                    </Link>

                </div>

                <div className='pb-8'>
                <Link to="/e-invite2">
                    <button type='submit' className='w-80 py-3 mt-8 ml-4 bg-[#023d3d] text-white rounded-md'>Continue</button>
                </Link>
                </div>
            </div>
        </>
    );
};

export default CreateInvitation;


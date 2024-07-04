import React from 'react';
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from 'react-router-dom';

const CreateInvitation2 = () => {
    return (
        <>
          <div className='mt-11 ml-9'>

            <div className='flex gap-7 items-center mb-7 '>
              
              <Link to="/e-invite1">
              <HiOutlineArrowLeft size={32} className=' text-[#023d3d] cursor-pointer mr-6 ' />
              </Link>
              <p className='font-semibold font-Inter text-[28px]'>Create E-Invite</p>
            </div>

            <form action="" className='font-Inter'>
                  <div className='mb-2'>
                   <label htmlFor="eventtitle" className='font-medium block mb-5'>Event Title</label>
                   <input type="text" id="eventtitle" className='border-neutral-400 pl-5 py-3 pb-4 border rounded-md w-[500px] ' placeholder='Your event title' />
                 </div>

                  <div className='mb-2'>
                   <label htmlFor="date/time" className='font-medium mb-5 block'>Date/Time</label>
                   <input type="text" id="date" className='border-neutral-400 pl-5 pb-4 py-3 border rounded-md w-[500px] block mb-2 ' placeholder='DD/MM/YY' />
                   <input type="text" id="time" className='border-neutral-400 pl-5 pb-4 py-3 border rounded-md w-[500px] ' placeholder='Time' />
                 </div> 

                  <div className='mb-2'>
                   <label htmlFor="location" className='font-medium block mb-2 pb-3 '>Location</label>
                   <input type="text" id="location" className='border-neutral-400 pl-5 pb-4 py-3 border rounded-md w-[500px] ' placeholder='Enter location' />
                 </div> 

                  <div className='mb-2'>
                   <label htmlFor="nameofhost" className='font-medium block mb-2'>Hosted By</label>
                   <input type="text" id="nameofhost" className='border-neutral-400 pl-5 pb-4 py-3 border rounded-md w-[500px] ' placeholder='Host Name(s)' />
                 </div> 

                 <div className='mb-20'>
                    <label htmlFor="hostnote">
                        <span className='font-medium block mb-4'>Note from Host</span>
                    </label>
                    <textarea id="hostnote" className='border-neutral-400 pl-6 pr-2 py-3 mobile:pt-1 mobile:pb-3 border rounded-md  mobile:w-[397px] h-[120px] w-[500px]' placeholder='Include contact numbers, venue requirements, dresscode, and the entertainment schedule to ensure attendees are well-informed and prepared for the event.'/>
                </div>
     
               </form>

               <div className='rounded-sm flex mb-10'>
               <Link to="/customize_invite"><button className='text-white font-Lato bg-[#023d3d] px-auto py-2 w-48 mr-16 rounded-lg '>Preview</button></Link>
                <button className='border-orange-600 text-amber-500 border rounded-lg px-auto py-2 w-48 mr-2 font-Lato '>Save</button>
               </div>

          </div>  
        </>
    );
};

export default CreateInvitation2;

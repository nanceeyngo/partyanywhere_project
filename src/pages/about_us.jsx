import React from 'react';

const About = () => {
    return (
        <div className='font-Lato bg-white rounded-xl p-20 shadow-lg max-w-xl md:w-full flex justify-center md:block'>
           
           <div className=''>
           <h1 className='text-[32px] font-Playfair font-bold md:px-0 px-6'>About us</h1>

            
        <div className='w-[500px] md:max-w-[600px] max-w-[370px]'>
        <p className='font-Lato text-[20px] mt-10 px-6 md:px-0'>
            Party Anywhere is a virtual event platform designed to make celebrating easy and 
            accessible, allowing people to connect and have fun regardless of location. We offer tools and 
            support for all types of virtual parties, from weddings to birthdays and corporate events.
        </p>
        </div>

           </div>
            
        </div>
    );
};

export default About;

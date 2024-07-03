import { useState } from 'react';
import ForgotPwdImg from '../assets/fgtpwdimg2.png';
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";

const ForgotPwd = () => {
    const [showDialog, setShowDialog] = useState(false);

    const handleContinueClick = () => {
        setShowDialog(true);
    };

    const closeModal = () => {
        setShowDialog(false);
    };

    return (
        <>
            <div className="w-full text-center md:px-0 px-10">
                <h1 className="text-[38px] font-medium font-Playfair mt-11 mb-2">Forgot Password</h1>
                <p className="text-[#828282] mb-8 font-normal font-Inter">Please enter the email address linked to this account</p>

                <form className='forgot-password' onSubmit={(e) => e.preventDefault()}>
                    <div className='mb-4'>
                        <label htmlFor="email" className='text-left md:text-center font-medium block font-Inter mb-2 mr-0 md:mr-[390px] mobile:mr-[345px] mobile:font-semibold '>Email address</label>
                        <input type="text" id="email" className='border-neutral-400 pl-2 py-3 border rounded-md w-[450px] mr-12 font-Lato mb-10 mobile:ml-0 mobile:w-[400px] mobile:mr-14' placeholder='Enter your email or phone number' />
                    </div>

                    <button type="button" className="rounded-md text-white md:w-[450px] w-[380px] py-3 mr-12 text-center bg-[#023d3d] mb-5 mobile:w-[400px] mobile:mb-1" onClick={handleContinueClick}>Continue</button>
                </form>

                <div className=' mr-0 md:mr-[220px] font-Inter mobile:mr-[180px] '>
                    <p className="text-left md:text-center text-[#3b3b3b] font-medium text-[16px] mobile:tracking-wide mobile:text-[14px] ">Remember your password? <Link to="/login_page">
                        <span className="text-[#D58A00] cursor-pointer inline font-bold text-[16px] mobile:text-[16px]">Login</span>
                    </Link> </p>
                    
                </div>
            </div>


            {showDialog && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
                    <div className="bg-white p-8 rounded-md shadow-md text-center transform transition-all duration-300 ease-in-out scale-95">
                        <h1 className="text-[38px] font-normal font-Playfair mt-11 mb-10">Password Recovery</h1>
                        <img src={ForgotPwdImg} alt="Password Recovery" className='mx-auto mb-14' />
                        <p className="text-[#626262] text-[20px] font-normal font-Inter">A link has been sent to your email address</p>
                        <IoMdClose size={22} className="absolute top-4 right-4 cursor-pointer text-[#023d3d]  " onClick={closeModal} /> 
                        {/* hover:-translate-y-1 hover:scale-110 hover:w-24 hover:rounded-xl duration-300" */}

                        <Link to="/reset_password">
                        <button className='bg-[#023d3d] text-white px-4 py-2 rounded-md'>Click</button>
                        </Link>

                    </div>

                </div>
            )}
        </>
    );
};

export default ForgotPwd;


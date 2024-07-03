import { useState } from 'react';
import { Link } from "react-router-dom";
import ResetPwdImg from '../assets/fgtpwdimg3.png';
import { IoMdClose } from "react-icons/io";

const ResetPwd = () => {
    // Checks if the passwords are the same
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [showDialog, setShowDialog] = useState(false);

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value !== newPassword) {
            setError('Passwords do not match.');
        } else {
            setError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPassword === confirmPassword) {
            setShowDialog(true);
        } else {
            setError('Passwords do not match.');
        }
    };

    const closeModal = () => {
        setShowDialog(false);
    };

    return (
        <div className="w-full text-center">
            <h1 className="text-[38px] font-medium font-Playfair mt-11 mb-2">Reset Password</h1>
            <p className="text-[#828282] mb-10 font-normal font-Inter">Please enter your new password</p>

            <form className='reset-password md:px-0 px-10' onSubmit={handleSubmit}>
                <div className='mb-3 text-left md:text-center'>
                    <label htmlFor="resetpwd" className='text-[18px] font-medium block font-Lato mb-2 mr-0 md:mr-[400px] mobile:mr-[350px]'>New password</label>
                    <input
                        type="password"
                        id="resetpwd"
                        value={newPassword}
                        onChange={handleNewPasswordChange}
                        className='border-neutral-400 pl-2 py-3 border rounded-md w-[450px] mr-0 md:mr-12 font-Lato mobile:mr-[80px] mobile:w-[380px]'
                    />
                </div>

                <div className='mb-16'>
                    <label htmlFor="confirmresetpwd" className='text-left md:text-center text-[18px] font-medium block font-Lato mb-2 mr-0 md:mr-[370px] mobile:mr-[330px]'>Confirm password</label>
                    <input
                        type="password"
                        id="confirmresetpwd"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        className='border-neutral-400 pl-2 py-3 border rounded-md w-[450px] mr-12 font-Lato mobile:mr-[80px] mobile:w-[380px]'
                    />
                    {error && <p className="text-[#023d3d]  text-sm mt-2">{error}</p>}
                </div>

                <button type="submit" className="rounded-md text-white w-[380px] md:w-[410px] py-3 mr-0 md:mr-20 text-center bg-[#023d3d] mb-5 mobile:w-[350px] mobile:mx-auto">Update password</button>
            </form>

            {showDialog && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-md shadow-md text-center relative">
                        <h1 className="text-[38px] font-normal font-Playfair mt-11">Password Recovered!</h1>
                        
                        <IoMdClose size={22} className="absolute top-4 right-4 cursor-pointer text-[#023d3d]  " onClick={closeModal} />

                        <p className="text-[#919090] text-[16px] font-normal font-Inter mb-12">Password Reset Successful</p>
                        
                        <img src={ResetPwdImg} alt="Password Recovered" className='mx-auto mb-14' />
                        
                        <Link to="/login_page">
                            <button className="text-white font-light tracking-tight text-[15px] font-Inter cursor-pointer bg-[#023d3d] px-20 md:px-44 py-3 rounded-md mx-auto mobile:w-[350px] mobile:px-[40px]">Proceed to login</button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ResetPwd;

import React from 'react';
import { Dialog, Transition} from '@headlessui/react';
import { Fragment, useState } from 'react';
import { GoDeviceDesktop } from "react-icons/go";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { GrGift } from "react-icons/gr";
import banquet from "../assets/banquet.png";
import couple from "../assets/couple.png";
import partydance1 from "../assets/party_dance.jpeg";
import partydance2 from "../assets/party_dance2.jpeg";
import bridesmaid from "../assets/bridesmaid.jpeg";
import traditional from "../assets/traditional.jpeg";
import bouquet from "../assets/bouquet.png";
import { RxStarFilled } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import logo from '../assets/newlogo.png';
import signup from "../assets/signupimage.jpeg"
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";



const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
        setIsOpen(false)
      }

    const openModal = () => {
        setIsOpen(true)
      }


      const [isOpen2, setIsOpen2] = useState(false)

    const closeModal2 = () => {
        setIsOpen2(false)
      }

    const openModal2 = () => {
        setIsOpen2(true)
      }
    
    //declaring a constanst to track and handle form input state
    const [inputValues, setInputValues] = useState({});
   //declaring a constant to validate form
    const [error, setError] = useState('');
   
   
//creating a function to hadle input changes in the form
    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // controling the values of all input fields by mapping and concatenating with the 3 dots
        setInputValues(values => ({...values, [name]: value}));

        //using the if statement to prevent submission until all fields are filled out by user
        if (!value.trim()) {
            setError('This field is required!');
            
        }
        else {
            setError('')
        }
        
    }
//function to drop an alert messeage, as well as print input values into the console, if all fields have been filled
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!error) {

            

        console.log('Form submitted with input:', inputValues);
          ;
        
        
        }
    
    }
    
    return (
        <div>

            <section className="bg-[linear-gradient(to_right_,rgba(6,8,15,0.6),rgba(6,8,15,0.2)),url('assets/bg_image.jpeg')] h-screen bg-cover bg-center bg-no-repeat text-[white] text-center justify-center items-center flex lg:px-0 px-24"> 
            
                <div className=''>
                <p className='font-Inter text-[0.7rem] md:text-[0.9rem]'>Live Stream, Interact, and Celebrate Virtually</p>
                <h1 className='font-Playfair font-bold text-[2.5rem] md:text-[4rem]'>Experience Events Like Never Before</h1>
                <p className='font-Lato text-[0.9rem] md:text-[1.4rem]'>Live stream events in high-definition, interact with real-time features,
                    and send virtual gifts that
                </p>
                <p className='font-Lato text-[0.9rem] md:text-[1.4rem] mb-12'>convert to cash
                </p>
                <div className='flex flex-col md:flex-row justify-center gap-4 m-3 font-Lato'>
            <button type="button"
           className='bg-[#023d3d] px-6 rounded-lg py-3 text-white text-[0.8rem] md:text-[1rem]'><NavLink to="/sign_up_page">Sign up now</NavLink></button>
            <button type='button'
           
            className='bg-transparent border-[#f7a437] border px-6 rounded-lg py-3 text-[white] text-[0.8rem] md:text-[1rem]'>Request a demo</button>
        
                </div>
                </div>
            </section>

            <section className=' text-left md:text-center mt-10 px-20 lg:px-0'>
                <h1 className='font-Playfair font-bold text-[1.8rem] md:text-4xl mb-2'>The stage is set, the moment is yours</h1>
                <p className='font-Lato text-[1.1rem]'>Take center stage and create unforgettable events. With our platform, you can easily create</p>
                <p className='font-Lato text-[1.1rem]'>RSVP, livestream your events, and do more to make every moment count</p>

            </section>

            <section className='flex flex-col md:flex-row mt-12 gap-16 md:gap-24 px-20 md:px-14'>
                <div className='text-center'>
                    <div className='bg-[#f7a437] rounded-md w-[56px] h-[52px] flex justify-center items-center m-auto'><GoDeviceDesktop size={30} /></div>
                    <h1 className='font-Playfair text-[28px] font-medium'>Live streaming</h1>
                    <p className='font-Lato text-[17px]'>Host online! With livestream, your guests are never too faraway to join your celebration</p>
                </div>
                <div className='text-center'>
                    <div className='bg-[#f7a437] rounded-md w-[56px] h-[52px] flex justify-center items-center m-auto'><HiOutlineEnvelope size={30} /></div>
                    <h1 className='font-Playfair text-[28px] font-medium'>E-invite</h1>
                    <p className='font-Lato text-[17px]'>Send the word, spread the love! Invite friends & family. Our e-invites make it easy to share the excitement</p>
                </div>
                <div className='text-center'> 
                    <div className='bg-[#f7a437] rounded-md w-[56px] h-[52px] flex justify-center items-center m-auto'><GrGift size={30} /></div>
                    <h1 className='font-Playfair text-[28px] font-medium'>Virtual gifting</h1>
                    <p className='font-Lato text-[17px]'>Send love and joy to someone special, wherever they are in the world. Celebrate special moments!</p>
                </div>
            </section>

            <section className='flex flex-col lg:flex-row mt-14 px-20 md:px-14 gap-8 justify-center items-center'>
                <div className='basis-[60%]'>
                    <h1 className='font-Playfair font-bold text-[20px] md:text-[27px]'>Your go-to platform for online events and celebrations!</h1>
                    <p className='font-Inter text-[15px] md:text-[19px] mt-8'>Make your virtual events unforgettable with our all-in-one platform.
                        From birthday bashes to corporate meetings, wedding parties to get together
                        with friends and family, our user-friendly interface makes setup a breeze.
                        Join us and create memorable online experiences!
                    </p>
                    <div className='font-Inter flex flex-col md:flex-row mt-10 md:gap-28 gap-10'>
                        <div className='text-center'>
                        <h1 className='font-bold text-[27px] md:text-[34px]'>100%</h1>
                        <p className='font-medium'>Video Quality</p>
                        </div>

                        <div className='text-center'>
                        <h1 className='font-bold text-[27px] md:text-[34px]'>90%</h1>
                        <p className='font-medium'>Success Rate</p>
                        </div>

                        <div className='text-center'>
                        <h1 className='font-bold text-[27px] md:text-[34px]'>70%</h1>
                        <p className='font-medium'>Virtual Entertainment</p>
                        </div>
                    </div>
                </div>

                <div className="h-[400px] basis-[43%]">

                    <img className='rounded-xl h-[70%] md:h-[100%] w-[100%] contrast-125' src={banquet} alt="Banquet" />
                </div>

            </section>

            <section className='text-center font-Inter mt-10 md:mt-20 md:px-0 px-8'>
                <h1 className='text-[28px] md:text-[36px] font-bold'>Image Gallery</h1>
                <p className='text-[16px] md:text-[18px]'>Check out images and moments from our clients</p>
            </section>

            <section className='flex flex-col lg:flex-row justify-center p-10 gap-6 px-20 md:px-10 md:mt-10'>
                <div className='basis-[43%]'>
                    <img className='w-[100%] h-[100%] rounded-2xl' src={couple} alt="Couple" />
                </div>

                <div className='flex flex-col gap-4 basis-[60%]'>

                    <div className='flex flex-col md:flex-row gap-4 basis-1/2'>
                    <div className='basis-1/2'><img className='w-[100%] h-[100%] rounded-xl' src={partydance2} alt="Party Dance 2" /></div>
                    <div className='basis-1/2'><img className='w-[100%] h-[100%] rounded-xl' src={bridesmaid} alt="Bridesmaid" /></div>
                    </div>
                    
                    <div className='flex flex-col md:flex-row gap-4 basis-1/2'>
                    <div className='basis-1/2'><img className='w-[100%] h-[100%] rounded-xl' src={partydance1} alt="Party Dance 1" /></div>
                    <div className='basis-1/2'><img className='w-[100%] h-[100%] rounded-xl' src={traditional} alt="Traditional" /></div>
                    </div>

                </div>
            </section>

            <section className='flex flex-col md:flex-row gap-18 md:gap-20 p-10 md:p-16 md:px-10 justify-center items-center mt-2 md:mt-0'>
                <div className='h-[650px] basis-[57%]'><img className='rounded-xl w-[100%] md:h-[100%] h-[70%]' src={bouquet} alt="Bouquet" /></div>

                {/* <div className='border-solid border-black border-[4px] w-0 h-20'></div> */}

                <div className='flex flex-col gap-16 basis-[60%] font-Inter'>
                    <div>
                        <h1 className='font-bold text-[32px] mb-2'>Step 1</h1>
                        <span className='font-bold text-[18px]'>Register!</span><span className='text-[18px]'> Register to access all the features and get started on making your event a great one.
                            Sign up and get tailored services just for you.
                        </span>
                    </div>

                    <div className=''>
                        <h1 className='font-bold text-[32px] mb-2'>Step 2</h1>
                        <span className='font-bold text-[18px]'>Choose a payment plan!</span><span className='text-[18px]'> Select a payment plan that best suits your needs. Simply choose the plan that works for you
                            and proceed to checkout.
                        </span>
                    </div>

                    <div>
                        <h1 className='font-bold text-[32px] mb-2'>Step 3</h1>
                        <span className='font-bold text-[18px]'>Host your event!</span><span className='text-[18px]'> With your paymet plan in pace, you're ready to host your event. Use our platform to 
                            manage invitations, track RSVPs, and coordinate all aspects of your event.
                        </span>
                    </div>
                </div>
            </section>

            <section className='flex flex-col text-left items-start justify-center md:items-center px-20 md:px-96 md:text-center gap-8 mt-10 font-Inter'>
                <div className='flex gap-2 '>
                    <div className='text-[#023d3d]'><RxStarFilled /></div>
                    <div className='text-[#023d3d]'><RxStarFilled /></div>
                    <div className='text-[#023d3d]'><RxStarFilled /></div>
                    <div className='text-[#023d3d]'><RxStarFilled /></div>
                    <div className='text-[#023d3d]'><RxStarFilled /></div>
                    
                </div>

                <div>
                    <p className='text-[18px]'>"Party Anywhere completely transformed my event planning experience. The platform is intuitive,
                        and the support team is always ready to help. From start to finish, everything was stress-free. I couldn't
                        have asked for a better tool to manage my parties. Highly recommend it!"
                    </p>
                </div>
                
                <div className='flex gap-20'>
                    <div>
                        <p>Grace</p>
                        <p>Lawyer</p>
                    </div>
                <div>
                    <p>Wedding Party</p>
                </div>
                
                </div>

            </section>

            <section className='bg-[#023d3d] font-Inter flex justify-center items-center text-center p-10 w-[95%] rounded-xl mt-14 m-auto'>
                <div className='text-white'>
                    <h1 className='text-[32px]'>Make Every Event Unforgettable</h1>
                    <p>Sign up for your free trial and experience the future of virtual events.</p>
                    <div><button type="button"
           className='bg-white px-6 rounded-lg py-3 text-[#803e00] font-bold mt-6'><NavLink to="/sign_up_page">Sign up now</NavLink></button></div>
                </div>
            </section>

            <footer className='bg-black text-white mt-8 flex justify-center items-center text-center p-14'>

            <div>
            
            <div className='w-[280px] h-[200px] cursor-pointer m-auto'>
                    <img className='w-[100%] h-[100%] z-20' src={logo} alt="LOGO" />
                </div>

                <ul className='flex justify-between gap-8 font-Lato'>
                    <li><NavLink to="/about_us">About us</NavLink></li>
                    <li><NavLink to="/about_us">Contact us</NavLink></li>
                    <li><NavLink to="/events">FAQ</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                                 
                </ul>


            </div>
            </footer>
            

            <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-[40px] text-left font-medium leading-6 text-gray-900 cursor-pointer font-Lato"
                    onClick={closeModal}
                  >
                    x
                  </Dialog.Title>
                  <div className='flex m-3 p-2 mt-5'>
            <div className='basis-1/2'>
                <img src={signup} alt="welcome image" className='h-[100%] w-[100%] rounded-[7px] ml-3 mr-12 ' />
            </div>

            <div className='mt-[0.5px] basis-1/2'>
            <h1 className='font-semibold font-Playfair text-[25px] '>Welcome back!</h1>

            <p className='font-Inter text-[14px] font-medium text-[#626262] mb-6 '>Login to continue</p>

            <p className='w-[420px] py-1 border-slate-300 border items-center flex justify-center mb-2 rounded-[4px] font-Inter font-medium text-[15px] cursor-pointer'><FcGoogle size={21} className='inline  mr-3 ' /> Continue with google</p>

            <div className='w-[420px] h-[40px] border-slate-300 border items-center flex justify-center rounded-[4px] font-Inter font-medium text-[15px] cursor-pointer'>
            <IoLogoApple size={30} className='inline pr-[10px]'/>
            <p className='mr-2 '>Continue with apple</p>
            </div>

            <p className='mt-6 mb-6 '>or</p>

            <form action="" className=''>

            <label htmlFor='email'>
                Email/phone number  </label>    
                <input 
                type="email"
                name='email'
                placeholder='Enter your email or phone number'
                value={inputValues.email || ""}
                onChange={handleInputChange} required/>

            <label htmlFor='createpin'>
                Password  </label>    
                <input 
                type="password"
                name='createpin'
                placeholder='Enter your password'
                value={inputValues.createpin || ""}
                onChange={handleInputChange} required/>

                <p>Forgot password?</p>

                <button className='rounded-md text-white w-24 text-center bg-[#553700]'>Login</button>

            </form>
    
            </div>

         </div>   
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>







     
        </div>
    );
};

export default Home;

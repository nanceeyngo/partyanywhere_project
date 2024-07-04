import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import successful1 from "../assets/successful1.png";
import { IoMdClose } from "react-icons/io";

const Rsvp = () => {

    //declaring a constanst to track and handle form input state
    const [inputValues, setInputValues] = useState({});
   //declaring a constant to validate form
    const [error, setError] = useState('');

    
    
    const [showDialog, setShowDialog] = useState(false);
   
   
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
        setShowDialog(true);
        }
    }

    const closeModal = () => {
        setShowDialog(false);
    };

    return (
        <div className='form-container2 mt-4 ml-12'>
            
            <div className='flex items-center gap-8'>
            <NavLink to="/"><FaArrowLeft size={30} /></NavLink>
            <h1 className='font-Playfair text-[30px]'>Create Guest List</h1>
            </div>
           

            <form className='font-Lato mt-8' onSubmit={handleSubmit}>
           {/*form input fields  */}
            <label htmlFor='username'>
                Name of guest  </label><br></br>
            
            {/* specifying input type as 'text' name as 'username' (used to track input valuesin 'value={inputValues.username}, placeholder to give info in the inputfield, and the handleInputChange to handle onChange events*/}
            {/* inserting 'required' in my form fields (example on line 57) helps validate the form by putting up the notification 'Please fill out this field' whenever a user fails to fill in all fields */}
            <input
                
                type="text"
                name='username'
                placeholder='Enter name of guest'
                value={inputValues.username || ""}
                onChange={handleInputChange} required/>
            <br></br>

                <label htmlFor='phoneno'>
                Phone number  </label><br></br>
            <input 
                type="number"
                name='phoneno'
                placeholder='Enter phone number'
                value={inputValues.phoneno || ""}
                onChange={handleInputChange} required/>
            <br></br>

            <label htmlFor='mode'>
                Mode of attendance  </label><br></br>
            <input 
                type="text"
                name='mode'
                placeholder='Enter mode of attendance'
                value={inputValues.mode || ""}
                onChange={handleInputChange} required/>
            <br></br>

            <label htmlFor='seat'>
                Seat number  </label><br></br>
            <input 
                type="number"
                name='seat'
                placeholder='Enter seat number'
                value={inputValues.seat || ""}
                onChange={handleInputChange} required/>
            <br></br>

            <label htmlFor='email'>
                Email  </label><br></br>
            <input 
                type="email"
                name='email'
                placeholder='Enter your email address'
                value={inputValues.email || ""}
                onChange={handleInputChange} required/>
            <br></br>

            <label htmlFor='unique'>
                Unique ID  </label><br></br>
            <input 
                type="number"
                name='unique'
                placeholder='Enter your unique ID'
                value={inputValues.unique || ""}
                onChange={handleInputChange} required/>
            <br></br>

            {error && <p className='errormsg'>{error}</p>}
            
            <div className='py-8 flex gap-6'>
            <button type='submit' className='bg-[#174C4D] px-4 rounded-lg py-[0.7rem] text-white'>Add guest</button>
            
            <button className='border-[#F69A22] border-[1.9px] text-[#F69A22] font-semibold px-4 rounded-lg py-[0.7rem]'><NavLink to="/import_contact">Import contact</NavLink></button>
            </div>


            </form>

            {showDialog && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-md shadow-md text-center relative">
                        
                        
                        <IoMdClose size={22} className="absolute top-4 right-4 cursor-pointer text-[#023d3d]  " onClick={closeModal} />

                        
                        
                        <img src={successful1} alt="Successful" className='mx-auto mt-14 mb-10' />
                        
                        
                        <p className="text-[16px] font-normal font-Lato">Guest successfully added</p>
                        
                        <div className='py-10 flex gap-6'>
             <button onClick={closeModal} className='bg-[#023d3d] px-16 rounded-lg py-[0.7rem] text-white'>Done</button>

            
            <button className='border-[#F69A22] border-[1.9px] text-[#F69A22] font-semibold px-8 rounded-lg py-[0.7rem]'><NavLink to="/guest_list">View guest list</NavLink></button>
            
            </div>
                    
                    </div>
                </div>
            )};
            
            
        </div>
    );
};

export default Rsvp;

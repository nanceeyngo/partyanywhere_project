import React, {Fragment, useState} from 'react';
import { Dialog, Transition} from '@headlessui/react';
import { MdOutlineCelebration } from "react-icons/md";


const Create = () => {

  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
      setIsOpen(false)
    }

  const openModal = () => {
      setIsOpen(true)
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
          setIsOpen('true');
        
        
        }
    
    }

    return (
        <div>


  


            <div class="container" id="container">
        <div class="header-container">
            
            <div class="header">
                <h1>Create Wallet</h1>
                <p>Create wallet and manage your party funds easily</p>
            </div>
        </div>

        <div className='form-container'>
        <form className='mt-16' onSubmit={handleSubmit}>
           {/*form input fields  */}
            <label htmlFor='username'>
                Account Name  </label>
            
            {/* specifying input type as 'text' name as 'username' (used to track input valuesin 'value={inputValues.username}, placeholder to give info in the inputfield, and the handleInputChange to handle onChange events*/}
            {/* inserting 'required' in my form fields (example on line 57) helps validate the form by putting up the notification 'Please fill out this field' whenever a user fails to fill in all fields */}
            <input 
                type="text"
                name='username'
                placeholder='Enter account name'
                value={inputValues.username || ""}
                onChange={handleInputChange} required/>

            <label htmlFor='email'>
                Email address  </label>    
                <input 
                type="email"
                name='email'
                placeholder='Enter email address'
                value={inputValues.email || ""}
                onChange={handleInputChange} required/>

            <label htmlFor='createpin'>
                Create 4 digit pin to validate spray/transfer  </label>    
                <input 
                type="password"
                name='createpin'
                placeholder='****'
                value={inputValues.createpin || ""}
                onChange={handleInputChange} required/>

            <label htmlFor='confirmpin'>
                Confirm 4 digit pin  </label>    
                <input 
                type="password"
                name='confirmpin'
                placeholder='****'
                value={inputValues.confirmpin || ""}
                onChange={handleInputChange} required/>
    
     {error && <p className='errormsg'>{error}</p>}

            <div id="walletBtn" >
            <button type="submit">Create wallet</button>
        </div>
        
            </form>
        </div>

        
        </div>

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
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-[40px] text-left font-medium leading-6 text-gray-900 cursor-pointer font-Lato"
                    onClick={closeModal}
                  >
                    x
                  </Dialog.Title>
                  <div class="modal-flex">
           <div className='text-[#805300]'><MdOutlineCelebration size={80} /></div>        
      <h1>Wallet successfully created</h1>
      <button type='button' id="done-btn" className='mt-20' onClick={closeModal}> Done </button>
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

export default Create;

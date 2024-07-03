import React from 'react';
import { NavLink } from 'react-router-dom';

const Services = () => {
    return (
        <div>
            <h1>Services page</h1>

            <ul className='gap-8 font-Lato'>

                    <li><NavLink to="/rsvp">RSVP</NavLink></li>
                    <li><NavLink to="/e-invite">E-invite</NavLink></li>
                    <li><NavLink to="/live_streaming">Live Streaming</NavLink></li>
                    <li><NavLink to="/create_wallet">Create Wallet</NavLink></li>
                    <li><NavLink to="/spray_pattern">Spray pattern</NavLink></li>
                    </ul>
           
            


        
        </div>
    );
};

export default Services;

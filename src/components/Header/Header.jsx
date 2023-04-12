import React from 'react';
import './Header.css'
import headerImage from '../../../public/assets/Images/man.png'
import Navbar from '../Navbar/Navbar';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation().pathname;
    console.log(location.pathname);
    return (
        <div>
            
            {
                location === '/' ? 
                <div>
                    <Navbar></Navbar>
                    <div className='mb-10 md:flex'>
                    <div className='py-10 pe-20'>
                        <h1 className='text-5xl font-bold'>One Step <br /> Closer To Your <br /> <span className='text-[#818EFE]'> Dream Job</span></h1>
                        <p className='my-5 text-[#757575] '>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className='text-sm'>Get Started</button>
                    </div>
                    <div>
                        <img src={headerImage} alt="" />
                    </div>
                </div>
                </div>
            : 
                <div>
                    <img className='bg-img' src='/assets/Images/Vector-1.png' alt="" />
                    <Navbar></Navbar>
                    <div className='h-44 text-center font-bold text-3xl header'>
                        {location.split('/')}
                    </div>
                </div>
            }
        </div>
        
    );
};

export default Header;
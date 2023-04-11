import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='flex items-center'>
            <h2 className='text-lg font-bold flex-auto'>HireMeNow</h2>
            <div className='flex-auto  text-sm w-64'>
            <Link to='/'>Home</Link>
            <Link to='/statistics'>Statistics</Link>
            <Link to='/appliedJobs'>Applied Jobs</Link>
            <Link to='/blog'>Blog</Link>
            </div>
            <button className='font-semibold'>Start Applying</button>
        </nav>
    );
};

export default Navbar;
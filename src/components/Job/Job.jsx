import React from 'react';
import './Job.css';

const Job = ({job}) => {
    const {logo, title, company, location, salary, type, time} = job;
    return (
        <div className='border rounded p-8'>
            <img className='mb-5' src={logo} alt="" />

                <h3 className='font-semibold text-2xl mb-1'>{title}</h3>
                <h6 className='text-xl mb-3 text-[#757575]'>{company}</h6>
                <div className='type mb-3 flex gap-5'>
                    <p>{type}</p>
                    <p>{time}</p>
                </div>
                <div className='flex gap-4 mb-5 text-[#757575]'>
                    <p><img className='inline pe-2' src='assets/Icons/LocationIcon.png' alt="" />{location}</p>
                    <p><img className='inline pe-2' src='assets/Icons/Frame.png' alt="" />Salary: {salary}</p>
                </div>
                <button>View Details</button>
            </div>
        
    );
};

export default Job;
import React from 'react';
import './Job.css';
import { Link } from 'react-router-dom';

const Job = ({job,applied}) => {
    const {id,logo, title, company, location, salary, type, time} = job;
    return (
        <div className={`border rounded p-8 ${applied?'flex items-center':'block'}`}>
            <div className={applied?'bg-[#F4F4F4] p-5 flex justify-center items-center w-40 h-40 me-10':''}>
            <img className='mb-5' src={logo} alt="" />

            </div>
                <div className={applied?'flex-1 me-4':''}>
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
                </div>
                <Link to={`/details/${id}`}><button>View Details</button></Link>
            </div>
        
    );
};

export default Job;
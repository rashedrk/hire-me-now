import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb } from '../../utilities/localStorage';

const Details = () => {
    const jobId = useLoaderData();
    const [job, setJob] = useState([]);
    
    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => {
                setJob(data.filter(jb => jb.id == jobId)[0]); 
                
            })
    },[]);

    const {id,description,responsibilities,edu,experiences,salary,title,phone,email,location} = job;
    return (
        <div className='md:flex md:gap-10 my-20'>
            <div className='md:w-3/5'>
                <p className='mb-4'><span className='font-bold'>Job Description: </span>{description}</p>
                <p className='mb-4'><span className='font-bold'>Job Responsibility: </span>{responsibilities}</p>
                <p className='mb-4'><span className='font-bold block mb-3'>Educational Requirements: </span>{edu}</p>
                <p className='mb-4'><span className='font-bold block mb-3'>Experiences: </span>{experiences}</p>
            </div>
            <div className='md:w-2/5'>
                <div className='bg-[#F3F2FF] p-8 rounded mb-5'>
                    <h2 className='font-bold text-lg mb-4'>Job Details</h2>
                    <hr />
                    <p className='text-lg font-semibold mt-4'><img className='inline pe-2' src="/assets/Icons/Frame.png" alt="" />Salary: <span className='font-normal text-[#757575]'>{salary} (Per Month)</span></p>
                    <p className='text-lg font-semibold mt-4'><img className='inline pe-2' src="/assets/Icons/Frame-1.png" alt="" />Job Title: <span className='font-normal text-[#757575]'>{title}</span></p>

                    <h2 className='font-bold text-lg mt-10 mb-4'>Job Details</h2>
                    <hr />
                    <p className='text-lg font-semibold mt-4'><img className='inline pe-2' src="/assets/Icons/Frame-2.png" alt="" />Phone: <span className='font-normal text-[#757575]'>{phone}</span></p>
                    <p className='text-lg font-semibold mt-4'><img className='inline pe-2' src="/assets/Icons/Frame-3.png" alt="" />Email: <span className='font-normal text-[#757575]'>{email}</span></p>
                    <p className='text-lg font-semibold mt-4'><img className='inline pe-2' src="/assets/Icons/Frame-4.png" alt="" />Address: <span className='font-normal text-[#757575]'>{location}</span></p>
                </div>
                <button className='w-[100%]' onClick={() => addToDb(`${id}`)}>Apply now</button>
            </div>
        </div>
    );
};

export default Details;
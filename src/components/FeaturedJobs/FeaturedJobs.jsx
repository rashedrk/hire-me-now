import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const FeaturedJobs = () => {
    const [btnClicked,setBtnClicked] = useState(false);
    const [allJobs, setAllJobs] = useState([]); 
    const [jobs, setJobs] = useState([]); 


    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => {
                setAllJobs(data);
                setJobs(data.slice(0,4))
            })
    },[]);
    console.log(jobs);
    console.log(allJobs);
    return (
        <div className='mb-10 text-center'>
            <div className=' mb-6'>
                <h2 className='font-bold text-xl'>Featured Jobs</h2>
                <p className='text-sm text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='text-left grid grid-cols-2 gap-6 mb-10'>
                {
                    btnClicked 
                    ? 
                        allJobs.map(job => <Job key={job.id} job={job}></Job>) 
                    : 
                        jobs.map(job => <Job  key={job.id} job={job}></Job>)
                }
            </div>
            <button className={btnClicked && 'hidden'} onClick={() =>  setBtnClicked(true)}>See All Jobs</button>
        </div>
    );
};

export default FeaturedJobs;
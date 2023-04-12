import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Job from '../Job/Job';

const AppliedJobs = () => {
    const loadedData = useLoaderData();
    const applied = true;
    return (
        
        <div>
            {
                loadedData.map (job => <Job key={job.id} job={job} applied={applied}></Job>)
            }
        </div>
    );
};

export default AppliedJobs;
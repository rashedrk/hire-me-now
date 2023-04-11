import React, { useEffect, useState } from 'react';

const JobCategoryList = () => {
    const [jobCategory, setJobCategory] = useState([]);
    useEffect(() => {
        fetch('jobCategory.json')
        .then( res => res.json())
        .then(data => setJobCategory(data))
    },[]);
    
    return (
        <div>
            <div className='text-center'>
            <h2 className='font-bold text-xl'>Job Category List</h2>
            <p className='text-sm text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

        </div>
    );
};

export default JobCategoryList;
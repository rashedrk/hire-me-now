import React from 'react';

const JobCategory = ({category}) => {
    console.log(category);
    const {name,logo,jobs_available} = category;
    return (
        <div className='bg-[#F9F8FF] rounded m-2 p-10'>
            <img className='bg-[#EDEEFF] p-3 rounded' src={logo} alt="" />
            <h4 className='font-bold mt-5 mb-2'>{name}</h4>
            <p>{jobs_available} jobs Available</p>
        </div>
    );
};

export default JobCategory;
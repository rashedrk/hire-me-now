import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const loadedData = useLoaderData();
    console.log(loadedData);
    return (
        <div>
            
        </div>
    );
};

export default Details;
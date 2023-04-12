import React, { useEffect, useState } from 'react';

const Statistics = () => {
    const [statistics,setStatistics] = useState([]);
    useEffect(() => {
        fetch('/marks.json')
            .then(res => res.json())
            .then(data => setStatistics(data))
    },[])
    return (
        <div>
            statistic
        </div>
    );
};

export default Statistics;
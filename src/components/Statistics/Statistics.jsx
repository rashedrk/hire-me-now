import React, { useEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const marks = [
        { "name": "assingment-1", "marks": 57 },
        { "name": "assingment-2", "marks": 59 },
        { "name": "assingment-3", "marks": 60 },
        { "name": "assingment-4", "marks": 60 },
        { "name": "assingment-5", "marks": 60 },
        { "name": "assingment-6", "marks": 56 },
        { "name": "assingment-7", "marks": 60 },
        { "name": "assingment-8", "marks": 58 }
    ]
    return (
        <div>
                <AreaChart width={1180} height={400} data={marks}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"></XAxis>
                    <YAxis/>
                    <Tooltip></Tooltip>
                    <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
        </div>
    );
};

export default Statistics;
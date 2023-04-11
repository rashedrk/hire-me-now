import React from 'react';
import Header from '../Header/Header';
import JobCategoryList from '../JobCategoryList/JobCategoryList';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <JobCategoryList></JobCategoryList>
            This is home
        </div>
    );
};

export default Home;
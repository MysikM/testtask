import React from 'react';
import Header from "../component/header/Header";
import Greeting from "../component/greeting/Greeting";
import WorkGetRequest from "../component/workGetRequest/WorkGetRequest";
import WorkPostRequest from "../component/workPostRequest/workPostRequest";

const HomePage = () => {
    return (
        <>
            <Header />
            <Greeting />
            <WorkGetRequest />
            <WorkPostRequest />
        </>
    );
};

export default HomePage;
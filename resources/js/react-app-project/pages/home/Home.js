import React, { useEffect } from 'react';
import NavBar from '../../components/navBar/NavBar';
import axios from 'axios';

const Home = () => {

    useEffect(()=>{
    }, []);

    return (
        <div>
            <NavBar />
            <h1>Home Page</h1>
        </div>
    );
};

export default Home;
import React, { useEffect } from 'react';
import NavBar from '../../components/navBar/NavBar';
import axios from 'axios';

const Home = () => {

    useEffect(()=>{
        // console.log('runs');
        getUsers();
    }, []);

    const getUsers = () => {
        axios.get('api/users')
            .then(res=>{
                console.log(res);
                console.log(res.data[0].username)
            })
            .catch(err=>{
                console.log(err);
            });
    };

    return (
        <div>
            <NavBar />
            <h1>Home Page</h1>
        </div>
    );
};

export default Home;
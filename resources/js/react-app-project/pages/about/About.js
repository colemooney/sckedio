import React from 'react';
import NavBar from '../../components/navBar/NavBar';

const About = (props) => {
    return (
        <div>
            <NavBar loggedIn={props.loggedIn} handleLogout={props.handleLogout} />
            <h1>About</h1>
        </div>
    );
};

export default About;
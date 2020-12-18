import React from 'react';
import NavBar from '../../components/navBar/NavBar';

const About = (props) => {
    return (
        <div>
            <NavBar loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} />
            <h1>About</h1>
        </div>
    );
};

export default About;
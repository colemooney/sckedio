import React from 'react';
import NavBar from '../../components/navBar/NavBar';

const Build = (props) => {
    return (
        <div>
            <NavBar loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} />
            <h1>Build Page</h1>
        </div>
    );
};

export default Build;
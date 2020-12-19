import React from 'react';
import NavBar from '../../components/navBar/NavBar';

const Build = (props) => {
    return (
        <div>
            <NavBar loggedIn={props.loggedIn} handleLogout={props.handleLogout} />
            <h1>Build Page</h1>
        </div>
    );
};

export default Build;
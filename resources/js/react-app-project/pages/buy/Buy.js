import React from 'react';
import NavBar from '../../components/navBar/NavBar';

const Buy = (props) => {
    return (
        <div>
            <NavBar loggedIn={props.loggedIn} handleLogout={props.handleLogout} />
            <h1>Buy Page</h1>
        </div>
    );
};

export default Buy;
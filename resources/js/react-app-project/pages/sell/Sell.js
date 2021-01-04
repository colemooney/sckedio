import React from 'react';
import NavBar from '../../components/navBar/NavBar';

const Sell = (props) => {

    return (
        <div>
            <NavBar loggedIn={props.loggedIn} handleLogout={props.handleLogout} />
            <h1>Sell</h1>
        </div>
    );
};

export default Sell;
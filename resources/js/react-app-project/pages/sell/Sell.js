import React from 'react';
import NavBar from '../../components/navBar/NavBar';

const Sell = (props) => {
    return (
        <div>
            <NavBar loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} />
            <h1>Sell</h1>
        </div>
    );
};

export default Sell;
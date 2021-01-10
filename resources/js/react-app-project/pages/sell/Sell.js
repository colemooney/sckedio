import React from 'react';
import NavBar from '../../components/navBar/NavBar';
import Section from '../../components/section/Section'

const Sell = (props) => {

    return (
        <div>
            <NavBar loggedIn={props.loggedIn} handleLogout={props.handleLogout} />
            <Section />
        </div>
    );
};

export default Sell;
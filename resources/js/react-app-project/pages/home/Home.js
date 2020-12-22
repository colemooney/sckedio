import React, { useEffect } from 'react';
import NavBar from '../../components/navBar/NavBar';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import ProfileEditModal from '../../components/profileEditModal/ProfileEditModal';

const Home = (props) => {

    // for modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
    }, []);

    return (
        <div>
            <NavBar loggedIn={props.loggedIn} handleLogout={props.handleLogout} />
            <h1>Home Page</h1>
            <Button variant='contained' onClick={handleOpen}>Edit</Button>
            <ProfileEditModal open={open} handleClose={handleClose} />
        </div>
    );
};

export default Home;
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import NavBar from '../../components/navBar/NavBar';
import ProfileEditModal from '../../components/profileEditModal/ProfileEditModal';
import ProfileInfoDisplay from '../../components/ProfileInfoDisplay/ProfileInfoDisplay';
import { useLocation } from "react-router-dom";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    editButton: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },

}));

const Profile = (props) => {
    const location = useLocation();
    const classes = useStyles();

    // for modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [userInfo, setUserInfo] = React.useState({
        username: null,
        firstName: null,
        lastName: null,
        email: null,
        street: null,
        city: null,
        state: null,
        postalCode: null,
        country: null,
        profilePhoto: 'https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-picture-default-avatar-photo-placeholder-profile-picture-eps-file-easy-to-edit-125707135.jpg'
    });

    const [newUserInfo, setNewUserInfo] = React.useState({
        // newUsername: null,
        newFirstName: null,
        newLastName: null,
        // newEmail: null,
        newStreet: null,
        newCity: null,
        newState: null,
        newPostalCode: null,
        newCountry: null,
    });

    useEffect(() => {
        const jwToken = localStorage.getItem('token');
        getUserInfo(jwToken);
    }, []);

    const getUserInfo = (newToken) => {
        const authAxios = axios.create({
            headers: {
                Authorization: `Bearer ${newToken}`
            }
        });
        authAxios.get('api/auth/user')
            .then(res => {
                setUserInfo({
                    ...userInfo,
                    username: res.data.username,
                    email: res.data.email
                });
                setNewUserInfo({
                    ...newUserInfo,
                    // newUsername: res.data.username,
                    // newEmail: res.data.email
                });
            })
            .catch(err => {
                console.log(err);
            });
    };

    const handleUpdateUserSubmit = () => {
        console.log('submit');
        const userUpdateInfo = {
            first_name: newUserInfo.newFirstName,
            last_name: newUserInfo.newLastName,
            state: newUserInfo.newState,
            city: newUserInfo.newCity,
            street: newUserInfo.newStreet,
            postal_code: newUserInfo.newPostalCode,
            country: newUserInfo.newCountry

        };
        const jwToken = localStorage.getItem('token');
        console.log('token: ' + jwToken);
        const authAxios = axios.create({
            headers: {
                Authorization: `Bearer ${jwToken}`
            }
        });

        console.log(userUpdateInfo);
        authAxios.put('api/auth/update-user-information', userUpdateInfo)
        // authAxios.post('api/auth/create-user-information', userUpdateInfo)
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                });
    };

    return (
        <div>
            <NavBar loggedIn={props.loggedIn} handleLogout={props.handleLogout} />
            <Container >
                <h1>Profile</h1>
                <ProfileInfoDisplay userInfo={userInfo} />
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <Button className={classes.editButton} variant='contained' onClick={handleOpen}>Edit</Button>
                    </Grid>
                </Grid>
                <ProfileEditModal 
                    open={open} 
                    handleClose={handleClose}
                    handleUpdateUserSubmit={handleUpdateUserSubmit} 
                    newUserInfo={newUserInfo} 
                    setNewUserInfo={setNewUserInfo} 
                />
            </Container>
        </div>
    );
};

export default Profile;
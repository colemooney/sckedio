import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import NavBar from '../../components/navBar/NavBar';
import ProfileEditModal from '../../components/profileEditModal/ProfileEditModal';
import ProfileInfoDisplay from '../../components/ProfileInfoDisplay/ProfileInfoDisplay';
import { useLocation } from "react-router-dom";

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
        firstName: 'First',
        lastName: 'Last',
        email: null,
        street: 'Street',
        city: 'City',
        state: 'XX',
        postalCode: '00000',
        country: 'USA',
        profilePhoto: 'https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-picture-default-avatar-photo-placeholder-profile-picture-eps-file-easy-to-edit-125707135.jpg'
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
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div>
            <NavBar loggedIn={props.loggedIn} handleLogout={props.handleLogout} />
            <Container >
                <h1>Profile</h1>
                <ProfileInfoDisplay user={userInfo} />
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <Button className={classes.editButton} variant='contained' onClick={handleOpen}>Edit</Button>
                    </Grid>
                </Grid>
                <ProfileEditModal open={open} handleClose={handleClose} />
            </Container>
        </div>
    );
};

export default Profile;
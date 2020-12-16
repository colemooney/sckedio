import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import NavBar from '../../components/navBar/NavBar';
import ProfileInfoDisplay from '../../components/ProfileInfoDisplay/ProfileInfoDisplay';
import auth from '../../auth';
import { useLocation } from "react-router-dom";

const Profile = (props) => {
    const location = useLocation();

    const [userInfo, setUserInfo] = React.useState({
        username: 'username',
        firstName: 'First',
        lastName: 'Last',
        email: 'Email',
        street: 'Street',
        city: 'City',
        state: 'XX',
        postalCode: '00000',
        country: 'USA',
        profilePhoto: 'https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-picture-default-avatar-photo-placeholder-profile-picture-eps-file-easy-to-edit-125707135.jpg'
    });

    useEffect(()=>{
            // const jwToken = auth.getToken();
            const jwToken = localStorage.getItem('token');
            getUserInfo(jwToken);
    },[]);

    const getUserInfo = (newToken) => {
        const authAxios = axios.create({
            headers: {
                Authorization: `Bearer ${newToken}`
            }
        });
        authAxios.get('api/auth/user')
            .then(res => {
                console.log('getting user info');
                console.log(res);
                setUserInfo({...userInfo, 
                    username: res.data.username,
                    email: res.data.email
                });
            })
            .catch(err =>{
                console.log(err);
            });
    }

    return(
        <div>
            <NavBar />
            <Container >
                <h1>Profile</h1>
                <ProfileInfoDisplay user={userInfo} />
            </Container>
        </div>
    );
};

export default Profile;
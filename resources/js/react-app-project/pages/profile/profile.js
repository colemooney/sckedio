import React from 'react';
import Container from '@material-ui/core/Container';
import NavBar from '../../components/navBar/Navbar';
import ProfileInfoDisplay from '../../components/ProfileInfoDisplay/ProfileInfoDisplay';

const userInfo = {
    username: 'jarrett-d-123',
    firstName: 'Jarrett',
    lastName: 'Dougherty',
    email: 'jarrettdougherty@gmail.com',
    street: '123 Main St',
    city: 'Philadelphia',
    state: 'PA',
    postalCode: 19104,
    country: 'USA',
    profilePhoto: 'https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-picture-default-avatar-photo-placeholder-profile-picture-eps-file-easy-to-edit-125707135.jpg'
};



const Profile = () => {
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
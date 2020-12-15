import React from 'react';
import Container from '@material-ui/core/Container';
import LoginForm from '../../components/loginForm/loginForm';
import axios from 'axios';


const Login = () => {

    const [loginUsername, setLoginUsername] = React.useState('');
    const [loginPassword, setLoginPassword] = React.useState('');
    const [usernameHelper, setUsernameHelper] = React.useState('');
    const [passwordHelper, setPasswordHelper] = React.useState('');

    const handleSubmit = () => {
        const loginData = {
            username: loginUsername,
            password: loginPassword,
            remember_me: true
        };

        console.log(loginData);

        const isValid = validateInputs();

        console.log('is valid: ' + isValid);
        if (isValid) {
            axios.post('api/auth/login', loginData)
                .then(res => {
                    console.log(res);
                    const jwToken = res.data.access_token;

                    // test JWT get request
                    // getUserInfo(jwToken);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

    // test JWT get request
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
            })
            .catch(err =>{
                console.log(err);
            });
    }

    const validateInputs = () => {
        const usernameExists = loginUsername ==='' ? false : true;
        const passwordExists = loginPassword==='' ? false : true;

        if (!usernameExists) {
            setUsernameHelper('Please enter a username');
        } else {
            setUsernameHelper('');
        }

        if (!passwordExists) {
            setPasswordHelper('Please enter a password');
        } else {
            setPasswordHelper('');
        }

        if (usernameExists && passwordExists) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <div>
            <Container>
                <LoginForm
                    loginUsername={loginUsername}
                    setLoginUsername={setLoginUsername}
                    loginPassword={loginPassword}
                    setLoginPassword={setLoginPassword}
                    handleSubmit={handleSubmit}
                    usernameHelper={usernameHelper}
                    passwordHelper={passwordHelper}
                />
            </Container>
        </div>
    );
};

export default Login;
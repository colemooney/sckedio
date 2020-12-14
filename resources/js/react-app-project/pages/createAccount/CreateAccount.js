import React from 'react';
import Container from '@material-ui/core/Container';
import CreateAccountForm from '../../components/createAccountForm/CreateAccountForm';
import axios from 'axios';

const CreateAccount = () => {

    const [signUpUsername, setSignUpUsername] = React.useState('');
    const [signUpPassword, setSignUpPassword] = React.useState('');
    const [signUpPasswordCon, setSignUpPasswordCon] = React.useState('');
    const [signUpEmail, setSignUpEmail] = React.useState('');
    const [usernameHelper, setUsernameHelper] = React.useState('');
    const [emailHelper, setEmailHelper] = React.useState('');
    const [passwordHelper, setPasswordHelper] = React.useState('');
    const [passwordMatchHelper, setPasswordMatchHelper] = React.useState('');

    const handleSubmit = () => {
        const userData = {
            username: signUpUsername,
            email: signUpEmail,
            password: signUpPassword,
            password_confirmation: signUpPasswordCon
        };

        console.log(userData);

        const isValid = validateInputs();

        console.log('is valid: ' + isValid);
        if (isValid) {
            axios.post('api/auth/signup', userData)
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

    const validateInputs = () => {
        const usernameIsValid = /^[a-zA-Z0-9]+$/.test(signUpUsername);
        const usernameIsLength = stringLengthTest(signUpUsername, 4, 25);

        const emailIsValid = /\S+@\S+\.\S+/.test(signUpEmail);

        const passwordIsLength = stringLengthTest(signUpPassword, 7, 200);

        const passwordIsMatch = passwordMatchTest();

        if (!usernameIsValid) {
            setUsernameHelper('Can only contain letters and numbers');
        } else {
            setUsernameHelper('');
            if (!usernameIsLength) {
                setUsernameHelper('Must be between 4 and 25 characters');
            } else {
                setUsernameHelper('');
            }
        }

        if (!emailIsValid) {
            setEmailHelper('Please enter a valid email');
        } else {
            setEmailHelper('');
        }

        if (!passwordIsLength) {
            setPasswordHelper('Must be between 7 and 200 characters');
        } else {
            setPasswordHelper('');
        }

        if (!passwordIsMatch) {
            setPasswordMatchHelper('Password does not match');
        } else {
            setPasswordMatchHelper('');
        }

        if (usernameIsValid && usernameIsLength && emailIsValid && passwordIsLength && passwordIsMatch) {
            return true;
        } else {
            return false;
        }
    };

    const passwordMatchTest = () => {
        if (signUpPassword === signUpPasswordCon) {
            return true;
        } else {
            return false;
        }
    };

    const stringLengthTest = (string, min, max) => {
        const stringLength = string.length;

        if (stringLength < min || stringLength > max) {
            return false;
        } else {
            return true;
        }
    };

    return (
        <div>
            <Container>
                <CreateAccountForm
                    signUpUsername={signUpUsername}
                    setSignUpUsername={setSignUpUsername}
                    signUpPassword={signUpPassword}
                    setSignUpPassword={setSignUpPassword}
                    signUpPasswordCon={signUpPasswordCon}
                    setSignUpPasswordCon={setSignUpPasswordCon}
                    signUpEmail={signUpEmail}
                    setSignUpEmail={setSignUpEmail}
                    handleSubmit={handleSubmit}
                    usernameHelper={usernameHelper}
                    emailHelper={emailHelper}
                    passwordHelper={passwordHelper}
                    passwordMatchHelper={passwordMatchHelper}
                />
            </Container>
        </div>
    );
};

export default CreateAccount;
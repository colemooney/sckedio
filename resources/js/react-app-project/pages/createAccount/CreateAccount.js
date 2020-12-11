import React from 'react';
import Container from '@material-ui/core/Container';
import CreateAccountForm from '../../components/createAccountForm/CreateAccountForm';
import axios from 'axios';

const CreateAccount = () => {

    const [signUpUsername, setSignUpUsername] = React.useState('');
    const [signUpPassword, setSignUpPassword] = React.useState('');
    const [signUpPasswordCon, setSignUpPasswordCon] = React.useState('');
    const [signUpEmail, setSignUpEmail] = React.useState('');
    const [signUpInstructions, setSignUpInstructions] = React.useState('Please fill out all fields')

    const handleSubmit = ()=>{
        const userData = {
            username: signUpUsername,
            email: signUpEmail,
            password: signUpPassword,
            password_confirmation: signUpPasswordCon
        };

        console.log(userData);

        axios.post('api/auth/signup', userData)
            .then(res=>{
                console.log(res);
            })
            .catch(err=>{
                console.log(err);
            })
    }

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
                    signUpInstructions={signUpInstructions}
                    handleSubmit={handleSubmit}
                />
            </Container>
        </div>
    );
};

export default CreateAccount;
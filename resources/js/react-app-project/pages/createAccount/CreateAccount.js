import React from 'react';
import Container from '@material-ui/core/Container';
import CreateAccountForm from '../../components/createAccountForm/CreateAccountForm';

const CreateAccount = () => {

    const [signUpUsername, setSignUpUsername] = React.useState();
    const [signUpPassword, setSignUpPassword] = React.useState();
    const [signUpPasswordCon, setSignUpPasswordCon] = React.useState();
    const [signUpEmail, setSignUpEmail] = React.useState();

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
                />
            </Container>
        </div>
    );
};

export default CreateAccount;
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    }
}));

const CreateAccountForm = (props) => {
    const classes = useStyles();
    const {
        setSignUpUsername,
        signUpUsername,
        signUpPassword,
        setSignUpPassword,
        signUpPasswordCon,
        setSignUpPasswordCon,
        signUpEmail,
        setSignUpEmail,
        handleSubmit,
        signUpInstructions
    } = props;

    const errorTest = false;

    return (
        <div className={classes.flexGrow}>
            <Grid container justify='center'>
                <Grid item container xs={12} justify='center'>
                    <Typography variant='h2'>Sckedio</Typography>
                </Grid>
                <Box border={1} width={380} borderRadius='borderRadius' borderColor='grey.500' p={3} mt={2}>
                    <Grid container spacing={3}>
                        <Grid item container xs={12} justify='center'>
                            <Typography variant='h5'>Create Account</Typography>
                        </Grid>
                        {/* <Grid item container xs={12} justify='center'>
                            <Typography variant='subtitle1'>{signUpInstructions}</Typography>
                        </Grid> */}
                        <Grid item xs={12}>
                            <TextField
                                id='username-input'
                                label='Username'
                                variant='outlined'
                                fullWidth
                                value={signUpUsername}
                                onChange={event => setSignUpUsername(event.target.value)}
                                error={errorTest ? true : false}
                                helperText={errorTest && 'something here'}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id='email-input'
                                label='Email'
                                variant='outlined'
                                fullWidth
                                value={signUpEmail}
                                onChange={event => setSignUpEmail(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id='password-input'
                                label='Password'
                                type='password'
                                variant='outlined'
                                fullWidth
                                value={signUpPassword}
                                onChange={event => setSignUpPassword(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id='password-input-confirm'
                                label='Confirm Password'
                                type='password'
                                variant='outlined'
                                fullWidth
                                value={signUpPasswordCon}
                                onChange={event => setSignUpPasswordCon(event.target.value)}
                            />
                        </Grid>
                        <Grid item container xs={12} justify='center'>
                            <Button 
                                variant="contained" color="primary"
                                onClick={handleSubmit}
                            >
                                Create Account
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </div>
    );
};

export default CreateAccountForm;
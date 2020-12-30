import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    }
}));

const PasswordResetForm = (props) => {
    const classes = useStyles();
    const {
        resetEmail,
        setResetEmail,
        resetPassword,
        setResetPassword,
        resetPasswordCon,
        setResetPasswordCon,
        handleSubmit,
        emailHelper,
        passwordHelper,
        passwordMatchHelper
    } = props;
    return (
        <div className={classes.flexGrow}>
            <Grid container justify='center'>
                <Grid item container xs={12} justify='center'>
                    <Typography variant='h2'>Sckedio</Typography>
                </Grid>
                <Box border={1} width={380} borderRadius='borderRadius' borderColor='grey.500' p={3} mt={2}>
                    <Grid container spacing={3}>
                        <Grid item container xs={12} justify='center'>
                            <Typography variant='h5'>Reset Password</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id='email-input'
                                label='Email'
                                variant='outlined'
                                fullWidth
                                value={resetEmail}
                                onChange={event => setResetEmail(event.target.value)}
                                error={emailHelper === '' ? false : true}
                                helperText={emailHelper}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id='password-input'
                                label='Password'
                                type='password'
                                variant='outlined'
                                fullWidth
                                value={resetPassword}
                                onChange={event => setResetPassword(event.target.value)}
                                error={passwordHelper === '' ? false : true}
                                helperText={passwordHelper}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id='password-input-confirm'
                                label='Confirm Password'
                                type='password'
                                variant='outlined'
                                fullWidth
                                value={resetPasswordCon}
                                onChange={event => setResetPasswordCon(event.target.value)}
                                error={passwordMatchHelper === '' ? false : true}
                                helperText={passwordMatchHelper}
                            />
                        </Grid>
                        <Grid item container xs={12} justify='center'>
                            <Button
                                variant="contained" color="primary"
                                onClick={handleSubmit}
                            >
                                Reset Password
                            </Button>
                        </Grid>
                        <Grid item container xs={12} justify='center'>
                            <Typography variant='body2'>Here by mistake? <Link href='/'>Home</Link></Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </div>
    );
};

export default PasswordResetForm;
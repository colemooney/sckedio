import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({

}));

const ProfileEditModal = (props) => {
    const classes = useStyles();
    const { open, handleClose } = props;

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Edit Profile</DialogTitle>
            <DialogContent>
                {/* <DialogContentText>
                    Edit profile information
                </DialogContentText> */}
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="first-name"
                            label="First Name"
                            variant='outlined'
                            type="text"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="last-name"
                            label="Last Name"
                            variant='outlined'
                            type="text"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="username"
                            label="Username"
                            variant='outlined'
                            type="text"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="email"
                            label="Email"
                            variant='outlined'
                            type="email"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="street-address"
                            label="Street Address"
                            variant='outlined'
                            type="text"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="city-address"
                            label="City"
                            variant='outlined'
                            type="text"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <TextField
                            id="state-address"
                            label="State"
                            variant='outlined'
                            type="text"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            id="postal-code-address"
                            label="Postal Code"
                            variant='outlined'
                            type="text"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="country-address"
                            label="Country"
                            variant='outlined'
                            type="text"
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary">
                    Cancel
              </Button>
                <Button onClick={handleClose} color="primary">
                    Submit
              </Button>
            </DialogActions>
        </Dialog>
    )

};

export default ProfileEditModal;
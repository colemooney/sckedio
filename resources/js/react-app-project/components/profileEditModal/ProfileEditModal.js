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
    const { 
        // newUsername, 
        newFirstName, 
        newLastName, 
        // newEmail, 
        newStreet, 
        newCity, 
        newState, 
        newPostalCode, 
        newCountry 
    } = props.newUserInfo;
    const { open, handleClose, setNewUserInfo, newUserInfo, handleUpdateUserSubmit } = props;

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
                            value={newFirstName ? newFirstName : ''}
                            onChange={event => setNewUserInfo(
                                {
                                    ...newUserInfo,
                                    newFirstName: event.target.value
                                }
                                )}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="last-name"
                            label="Last Name"
                            variant='outlined'
                            type="text"
                            value={newLastName ? newLastName : ''}
                            onChange={event => setNewUserInfo(
                                {
                                    ...newUserInfo,
                                    newLastName: event.target.value
                                }
                                )}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="username"
                            label="Username"
                            variant='outlined'
                            type="text"
                            // value={newUsername}
                            // onChange={event => setNewUserInfo(
                            //     {
                            //         ...newUserInfo,
                            //         newUsername: event.target.value
                            //     }
                            //     )}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="email"
                            label="Email"
                            variant='outlined'
                            type="email"
                            // value={newEmail}
                            // onChange={event => setNewUserInfo(
                            //     {
                            //         ...newUserInfo,
                            //         newEmail: event.target.value
                            //     }
                            //     )}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="street-address"
                            label="Street Address"
                            variant='outlined'
                            type="text"
                            value={newStreet ? newStreet : ''}
                            onChange={event => setNewUserInfo(
                                {
                                    ...newUserInfo,
                                    newStreet: event.target.value
                                }
                                )}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="city-address"
                            label="City"
                            variant='outlined'
                            type="text"
                            value={newCity ? newCity : ''}
                            onChange={event => setNewUserInfo(
                                {
                                    ...newUserInfo,
                                    newCity: event.target.value
                                }
                                )}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <TextField
                            id="state-address"
                            label="State"
                            variant='outlined'
                            type="text"
                            value={newState ? newState : ''}
                            onChange={event => setNewUserInfo(
                                {
                                    ...newUserInfo,
                                    newState: event.target.value
                                }
                                )}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            id="postal-code-address"
                            label="Postal Code"
                            variant='outlined'
                            type="text"
                            value={newPostalCode ? newPostalCode : ''}
                            onChange={event => setNewUserInfo(
                                {
                                    ...newUserInfo,
                                    newPostalCode: event.target.value
                                }
                                )}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="country-address"
                            label="Country"
                            variant='outlined'
                            type="text"
                            value={newCountry ? newCountry : ''}
                            onChange={event => setNewUserInfo(
                                {
                                    ...newUserInfo,
                                    newCountry: event.target.value
                                }
                                )}
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary">
                    Cancel
              </Button>
                <Button 
                    onClick={()=>{
                        handleUpdateUserSubmit();
                        handleClose();
                    }} 
                    color="primary"
                >
                    Submit
              </Button>
            </DialogActions>
        </Dialog>
    )

};

export default ProfileEditModal;
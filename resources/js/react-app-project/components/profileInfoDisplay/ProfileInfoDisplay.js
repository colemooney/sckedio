import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    backgroundColor: {
        backgroundColor: 'blue'
    },
    profileImage: {
        maxWidth: '100%'
    }
}));

const ProfileInfoDisplay = (props) => {
    const classes = useStyles();
    const { username, firstName, lastName, email, street, city, state, postalCode, country, profilePhoto } = props.user;

    return (
        <div>
            <Grid container spacing={4}>
                <Grid container item spacing={3} xs={4} >
                    <Grid item xs={12}>
                        <img className={classes.profileImage} src={profilePhoto} />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h6' color='textSecondary'>ACCOUNT TYPE</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography >Designer, Buyer</Typography>
                    </Grid>
                </Grid>
                <Grid container item spacing={3} xs={8} alignContent='flex-start'>
                    <Grid item xs={12}>
                        <Typography variant='h4' gutterBottom>
                            {firstName} {lastName}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h6' color='textSecondary'>
                            INFORMATION
                        </Typography>
                    </Grid>
                    <Grid container item xs={12}>
                        <Grid item xs={4}>
                            <Typography>
                                Username:
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography>
                                {username}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12}>
                        <Grid item xs={4}>
                            <Typography>
                                Email:
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography>
                                {email}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12}>
                        <Grid item xs={4}>
                            <Typography>
                                Address:
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography>
                                {street}, {city}, {state}, {postalCode}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12}>
                        <Grid item xs={4}>
                            <Typography>
                                Country:
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography>
                                {country}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );

};

export default ProfileInfoDisplay;
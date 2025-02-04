import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    accounts: {
        marginTop: theme.spacing(2)
    },
    backgroundColor: {
        backgroundColor: 'blue'
    },
    bold: {
        fontWeight: 500
    },
    imageContainer: {
        cursor: 'pointer',
        position: 'relative',
        '&:hover': {
            '& img': {
                opacity: .8
            },
            '& div': {
                opacity: 1
            }
        }
    },
    marginTop: {
        [theme.breakpoints.up('sm')]: {
            marginBottom: theme.spacing(2)
        }
    },
    middleImage: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        textAlign: 'center',
        opacity: 0
    },
    profileImage: {
        maxWidth: '100%',

    },
    root: {
        flexGrow: 1
    },
    textImage: {
        backgroundColor: 'grey',
        color: 'white',
        fontSize: 16,
        padding: '6px 12px'
    }

}));

const ProfileInfoDisplay = (props) => {
    const classes = useStyles();
    const { handleOpen } = props;
    const {
        username,
        firstName,
        lastName,
        bio,
        socialMedia,
        email,
        street,
        city,
        state,
        postalCode,
        country,
        profilePhoto,
        roles
    } = props.userInfo;

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

    const convertRoles = () => {
        let rolesString = '';
        for (let i = 0; i < roles.length; i++) {
            const roleCapitalize = roles[i].charAt(0).toUpperCase() + roles[i].slice(1);
            if (i < (roles.length - 1)) {
                rolesString = rolesString + roleCapitalize + ', ';
            } else {
                rolesString = rolesString + roleCapitalize;
            }
        }
        return rolesString;
    };


    return (
        <div className={classes.root}>
            {isMobile ? (
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <div className={classes.imageContainer} onClick={() => handleOpen('picture')}>
                            <img className={classes.profileImage} src={profilePhoto} />
                            <div className={classes.middleImage}>
                                <div className={classes.textImage}>Edit</div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h4' gutterBottom>
                            {firstName} {lastName}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                            variant='h6'
                            color='textSecondary'
                        >
                            ACCOUNT TYPE
                        </Typography>
                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            {convertRoles()}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h6' color='textSecondary' >
                            INFORMATION
                        </Typography>
                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.bold}>
                            Username:
                        </Typography>
                        <Typography>
                            {username}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.bold}>
                            Bio:
                        </Typography>
                        <Typography>
                            {bio}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.bold}>
                            Social Media:
                        </Typography>
                        {socialMedia.map(sm => {
                            return (
                                <Typography>
                                    <span className='socialMediaName'>{sm.social_media}</span> 
                                    <br/> 
                                    <span className='socialMediaLink'>{sm.social_link}</span>
                                </Typography>
                            )
                        })}
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.bold}>
                            Email:
                        </Typography>
                        <Typography>
                            {email}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.bold}>
                            Address:
                        </Typography>
                        <Typography>
                            {street}<br />{city === '' ? city : city + ','} {state}<br />{postalCode}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.bold}>
                            Country:
                        </Typography>
                        <Typography>
                            {country}
                        </Typography>
                    </Grid>
                </Grid>
            ) : (
                <Grid container spacing={4}>
                    <Grid container item xs={4}>
                        <Grid item xs={12}>
                            <div className={classes.imageContainer} onClick={() => handleOpen('picture')}>
                                <img className={classes.profileImage} src={profilePhoto} onClick={() => handleOpen('picture')} />
                                <div className={classes.middleImage}>
                                    <div className={classes.textImage}>Edit</div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={classes.marginTop}></div>
                            <Typography variant='h6' color='textSecondary'>ACCOUNT TYPE</Typography>
                            <Divider />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography className={classes.accounts}>{convertRoles()}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item xs={8} >
                        <Grid item xs={12}>
                            <Typography variant='h4' gutterBottom>
                                {firstName} {lastName}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='h6' color='textSecondary'>
                                INFORMATION
                                </Typography>
                            <Divider />
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item xs={4} sm={3}>
                                <Typography>
                                    Username:
                                    </Typography>
                            </Grid>
                            <Grid item xs={8} md={9}>
                                <Typography>
                                    {username}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item xs={4} sm={3}>
                                <Typography>
                                    Bio:
                                </Typography>
                            </Grid>
                            <Grid item xs={8} md={9}>
                                <Typography>
                                    {bio}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item xs={4} sm={3}>
                                <Typography>
                                    Social Media:
                                </Typography>
                            </Grid>
                            <Grid item xs={8} md={9}>
                                {socialMedia.map(sm => {
                                    return (
                                        <Typography key={sm.social_media}>
                                            <span className='socialMediaName'>{sm.social_media}</span> 
                                            <br/> 
                                            <span className='socialMediaLink'>{sm.social_link}</span>
                                        </Typography>
                                    )
                                })}
                            </Grid>
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item xs={4} sm={3}>
                                <Typography>
                                    Email:
                                    </Typography>
                            </Grid>
                            <Grid item xs={8} md={9}>
                                <Typography>
                                    {email}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item xs={4} sm={3}>
                                <Typography>
                                    Address:
                                    </Typography>
                            </Grid>
                            <Grid item xs={8} md={9}>
                                <Typography>
                                    {street}<br />{city && city + ','} {state}<br />{postalCode}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item xs={4} sm={3}>
                                <Typography>
                                    Country:
                                    </Typography>
                            </Grid>
                            <Grid item xs={8} md={9}>
                                <Typography>
                                    {country}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            )}
        </div>
    );

};

export default ProfileInfoDisplay;

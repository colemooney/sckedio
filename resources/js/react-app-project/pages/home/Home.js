import React, { useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import NavBar from '../../components/navBar/NavBar';
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import VisibilitySensor from 'react-visibility-sensor';
import { useHistory } from "react-router-dom";
import artisanImage from '../../../../assets/artisan2.jpg';
import workImage from '../../../../assets/work.jpg';
import whiteboard from '../../../../assets/whiteboard4.jpg'
import lightbulbImage from '../../../../assets/lightbulb2.jpg'

const useStyles = makeStyles((theme) => ({
    circleGrid: {
        width: 80,
        height: 80
    },
    root: {
        marginTop: theme.spacing(3)
    },
    stepGrid: {
        marginTop: 100,
        marginBottom: 100
    },
    topSectionBackground: {
        height: 450,
        width: '100%',
        backgroundImage: `url(${lightbulbImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top-center',
        backgroundRepeat: 'no-repeat',
        padding: 0,
        color: 'white'
    }
}))

const Home = (props) => {
    const classes = useStyles()
    let history = useHistory();

    const [stepOneActive, setStepOneActive] = React.useState(false);
    const [stepTwoActive, setStepTwoActive] = React.useState(false);
    const [stepThreeActive, setStepThreeActive] = React.useState(false);
    const [stepFourActive, setStepFourActive] = React.useState(false);

    return (
        <div>
            <NavBar loggedIn={props.loggedIn} handleLogout={props.handleLogout} roles={props.roles} />
            {/* <h1>Home Page</h1> */}
            <div className={classes.root}>
                <Grid container justify='center'>
                    <Grid item container xs={12} justify='center' spacing={3}>
                        <Grid item container xs={12} justify='center' spacing={3} className={classes.topSectionBackground}>

                            <Grid item xs={12}>

                                <Typography variant='h2' align='center'>The Marketplace for Ideas</Typography>
                            </Grid>

                            <Grid item container xs={12} sm={10} md={6} spacing={3}>
                                <Typography variant='h5' align='center'>Sckedio connects people who have an idea for a product with people who want to build and buy their idea</Typography>

                                <Grid item container xs={12} justify='space-between' >
                                    <Grid item>

                                        <Button variant='contained' color='primary' onClick={() => history.push('/get-started')} >Submit an Idea</Button>
                                    </Grid>
                                    <Grid item>

                                        <Button variant='contained' color='primary'>Build</Button>
                                    </Grid>
                                    <Grid item>

                                        <Button variant='contained' color='primary'>Buy New Products</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item container xs={8}>
                            <VisibilitySensor onChange={(isVisible) => setStepOneActive(isVisible)}>
                                <Fade in={stepOneActive} timeout={500}>
                                    <Grid item container xs={12} className={classes.stepGrid}>
                                        <Grid item container xs={4} align='center' >
                                            <Box borderRadius='50%' border={1} height={80} width={80} display='flex' alignItems='center' justifyContent='center'>
                                                <AddIcon className={classes.circleGrid} />
                                            </Box>
                                        </Grid>
                                        <Grid item container xs={8} alignItems='center'>
                                            <Typography variant='h4'>Step 1: Create the idea of your dreams!</Typography>
                                        </Grid>
                                    </Grid>
                                </Fade>
                            </VisibilitySensor>

                            <VisibilitySensor onChange={(isVisible) => setStepTwoActive(isVisible)}>
                                <Fade in={stepTwoActive} timeout={500}>
                                    <Grid item container xs={12} className={classes.stepGrid}>
                                        <Grid item container xs={4} align='center' >
                                            <Box borderRadius='50%' border={1} height={80} width={80} display='flex' alignItems='center' justifyContent='center'>
                                                <AddIcon className={classes.circleGrid} />
                                            </Box>
                                        </Grid>
                                        <Grid item container xs={8} alignItems='center'>
                                            <Typography variant='h4'>Step 2: Upload your design to Sckedio! Include images, plans, or just an idea!</Typography>
                                        </Grid>
                                    </Grid>
                                </Fade>
                            </VisibilitySensor>

                            <VisibilitySensor onChange={(isVisible) => setStepThreeActive(isVisible)}>
                                <Fade in={stepThreeActive} timeout={500}>
                                    <Grid item container xs={12} className={classes.stepGrid}>
                                        <Grid item container xs={4} align='center' >
                                            <Box borderRadius='50%' border={1} height={80} width={80} display='flex' alignItems='center' justifyContent='center'>
                                                <AddIcon className={classes.circleGrid} />
                                            </Box>
                                        </Grid>
                                        <Grid item container xs={8} alignItems='center'>
                                            <Typography variant='h4'>Step 3: Manufactors find design and put in bids.</Typography>
                                        </Grid>
                                    </Grid>
                                </Fade>
                            </VisibilitySensor>

                            <VisibilitySensor onChange={(isVisible) => setStepFourActive(isVisible)}>
                                <Fade in={stepFourActive}>
                                    <Grid item container xs={12} className={classes.stepGrid}>
                                        <Grid item container xs={4} align='center' >
                                            <Box borderRadius='50%' border={1} height={80} width={80} display='flex' alignItems='center' justifyContent='center'>
                                                <AddIcon className={classes.circleGrid} />
                                            </Box>
                                        </Grid>
                                        <Grid item container xs={8} alignItems='center'>
                                            <Typography variant='h4'>Step 4: Buyers find products they like and denote their interest in them.</Typography>
                                        </Grid>
                                    </Grid>
                                </Fade>
                            </VisibilitySensor>

                        </Grid>
                        <Grid item container xs={12} justify='space-between' spacing={1}>
                            <Grid item xs={12} sm={6} md={5}>
                                <img src={artisanImage} width='100%' />
                            </Grid>
                            <Grid item container xs={12} sm={6} md={7} justify='space-around'>
                                <Typography variant='h4' align='center'>Stay tuned in</Typography>
                                <Typography variant='h5' align='center'>Sckedio embraces the spirit of innovation, so make sure to keep up to date on our big changes</Typography>
                                <Grid item container xs={12} spacing={1} align='center'>
                                    <Grid item xs={4} sm={12} md={4}>
                                        <TextField id="form-name" label="Name" variant="outlined" size='small' />
                                    </Grid>

                                    <Grid item xs={4} sm={12} md={4}>
                                        <TextField id="form-email" label="Email" variant="outlined" size='small' />
                                    </Grid>

                                    <Grid item xs={4} sm={12} md={4}>
                                        <Button variant="contained" color="primary">Subscribe</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>


            </div>
        </div>
    );
};

export default Home;
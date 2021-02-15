import React, { useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import NavBar from '../../components/navBar/NavBar';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import artisanImage from '../../../../assets/artisan.jpg';
import workImage from '../../../../assets/work.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3)
    }
}))

const Home = (props) => {
    const classes = useStyles()

    let history = useHistory();

    return (
        <div>
            <NavBar loggedIn={props.loggedIn} handleLogout={props.handleLogout} roles={props.roles} />
            {/* <h1>Home Page</h1> */}
            <div className={classes.root}>
                <Grid container justify='center'>
                    <Grid item container xs={12} justify='center' spacing={3}>
                        <Grid item xs={12}>

                            <Typography variant='h2' align='center'>The Marketplace for Ideas</Typography>
                        </Grid>

                        <Grid item container xs={6} spacing={3}>
                            <Typography variant='h5' align='center'>Sckedio connects people who have an idea for a product with people who want to build and buy their idea</Typography>

                            <Grid item container xs={12} justify='space-between'>
                                <Button variant='contained' color='primary'>Submit an Idea</Button>
                                <Button variant='contained' color='primary'>Build</Button>
                                <Button variant='contained' color='primary'>Buy New Products</Button>
                            </Grid>
                        </Grid>

                        <img src={workImage} width='100%' />
                        <Grid item container xs={12} justify='space-between'>
                            <Grid item xs={12} sm={4}>
                                <img src={artisanImage} width='100%' />
                            </Grid>
                            <Grid item container xs={12} sm={7} justify='space-around'>
                                <Typography variant='h4' align='center'>Stay tuned in</Typography>
                                <Typography variant='h5' align='center'>Sckedio embraces the spirit of innovation, so make sure to keep up to date on our big changes</Typography>
                                <div>
                                    <TextField id="form-name" label="Name" variant="outlined" />
                                    <TextField id="form-email" label="Email" variant="outlined" />
                                    <Button variant="contained" color="primary">Subscribe</Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>


            </div>
        </div>
    );
};

export default Home;
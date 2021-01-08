import React, { useEffect } from 'react';
import NavBar from '../../components/navBar/NavBar';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

const Home = (props) => {
    useEffect(() => {
    }, []);

    return (
        <div>
            <NavBar loggedIn={props.loggedIn} handleLogout={props.handleLogout} />
            {/* <h1>Home Page</h1> */}
            <div>
                <Grid container justify='center' spacing={8}>
                    <Grid item container xs={12} xl={12} justify='center'>
                        <Typography variant='h2' align='center'>The marketplace for ideas</Typography>
                    </Grid>
                    <Grid container xs={10} xl={10} justify='center'>
                        <Typography variant='h5' align='center'>Sckedio connects people who have an idea for a product with people who want to build and buy their idea.</Typography>
                    </Grid>
                </Grid>
                <Grid container justify='center' spacing={8}>
                    <Grid item container xs={12} xl={12} justify='center'>
                        <Typography variant='h2' align='center'>Your ideas into action.</Typography>
                    </Grid>
                    <Grid container xs={10} xl={10} justify='center'>
                        <Typography variant='h5' align='center'>Once your idea is submitted, buyers have the opportunity to express interest and our manufacturers can turn your idea into a reality.</Typography>
                    </Grid>
                </Grid>
                <Grid container justify='center' spacing={8}>
                    <Grid item container xs={12} xl={12} justify='center'>
                        <Typography variant='h2' align='center'>Turn your idea into a reality and make money in the process.</Typography>
                    </Grid>
                    <Grid container xs={10} xl={10} justify='center'>
                        <Typography variant='h5' align='center'>Any idea — fully developed or a shower thought— gives you a chance to make money</Typography>
                    </Grid>
                </Grid>
                <Grid container justify='center' spacing={8}>
                    <Grid item container xs={12} xl={12} justify='center'>
                        <Typography variant='h5' align='center'>Follow a few easy steps to change the world with your idea</Typography>
                        <Typography variant='h5' align='center'>Easy upload process</Typography>
                        <Typography variant='h5' align='center'>Free to submit</Typography>
                        <Typography variant='h5' align='center'>All ideas welcome</Typography>
                    </Grid>
                </Grid>
                <Grid container justify='center' spacing={8}>
                    <Grid item container xs={12} xl={12} justify='center'>
                        <Typography variant='h5' align='center'>Stay tuned in.</Typography>
                        <Typography variant='h5' align='center'>Sckedio embraces the spirit of innovation, so make sure to keep up to date on our big changes</Typography>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Home;
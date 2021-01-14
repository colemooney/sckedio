import React, { useEffect } from 'react';
import NavBar from '../../components/navBar/NavBar';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from 'axios';

const Home = (props) => {
    useEffect(() => {
    }, []);

    const styles = {
        topSectionBackground: {
            height: 1000,
            backgroundImage: `url(${"../../images/pexels-christina-morillo-1181345.jpg"})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top-center',
            backgroundRepeat: 'no-repeat',
            width: `calc(100vw + 40px)`,
            // width: "100%",
            // margin: 0,
            padding: 0,
        },
        smallWhiteboardImage: {
            borderColor: 'transparent'
        },
        middleSectionBackground: {
            padding: 50,
        },
        artisanWhiteboardImage: {
            maxWidth: 600
        },

    }

    return (
        <div>
            <NavBar loggedIn={props.loggedIn} handleLogout={props.handleLogout} />
            {/* <h1>Home Page</h1> */}
            <div>
                <Container style={{ margin: 0, padding: 0 }}>

                    <Grid container spacing={0} direction="column" >{/*All page content */}

                        {/*Top section */}
                        <Grid item style={styles.topSectionBackground}>{/*Photo background and container of top panel of marketplace text+smaller image*/}
                            <Box m={4}>
                                <Grid item container xs={12}>{/*Container of "The marketplace..." text and image on right */}
                                    <Grid item xs={12} md={6}>{/*The marketplace for ideas...+Sckedio connects... */}
                                        <Typography variant='h2'>The marketplace for ideas</Typography>
                                        <Typography variant='h5'>Sckedio connects people who have an idea for a product with people who want to build and buy their idea.</Typography>
                                    </Grid>
                                    <Grid item xs={12} md={6}>{/* Small image of man at whiteboard*/}
                                        <Box display="flex" justifyContent="center" alignItems="center" backgroundSize="contain">
                                            <img src={require("../../images/pexels-christina-morillo-1181345.jpg")} style={styles.smallWhiteboardImage} id="whiteboard-small-image" width="100%" border="100px" alt="whiteboard-small-image" />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>

                            <Box m={4}>
                                <Grid item container xs={12} >
                                    <Grid item xs={12} md={6}>
                                        <Typography variant='h3'>Your ideas into action.</Typography>
                                        <Typography variant='h5'>Sckedio connects people who have an idea for a product with people who want to build and buy their idea.</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>

                        {/*Middle section*/}
                        <Grid item style={styles.middleSectionBackground}>

                            <Grid item container>

                                <Grid item xs={12} md={6}>{/* Image of artisan drawing on whiteboard*/}
                                    <Box display="flex" justifyContent="center" alignItems="center" backgroundSize="contain">
                                        <img src={require("../../images/artisan.jpg")} style={styles.artisanWhiteboardImage} id="artisan-image" width="100%" alt="artisan-image" />
                                    </Box>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <Typography variant='h2'>Turn your idea into a reality and make money in the process.</Typography>
                                    <Typography variant='h5'>Any idea — fully developed or a shower thought— gives you a chance to make money</Typography>
                                    <Typography variant='h5'>Follow a few easy steps to change the world with your idea</Typography>
                                    <Typography variant='h5' align='center'>Easy upload process</Typography>
                                    <Typography variant='h5' align='center'>Free to submit</Typography>
                                    <Typography variant='h5' align='center'>All ideas welcome</Typography>
                                </Grid>

                            </Grid>

                        </Grid>



                    </Grid>

                    {/* <Grid container justify='center' spacing={8}>
                        <Grid item container xs={12} xl={12} justify='center'>
                            <Typography variant='h2' align='center'>The marketplace for ideas</Typography>
                        </Grid>
                        <Grid item container xs={10} xl={6} justify='center'>
                            <Typography variant='h5' align='center'>Sckedio connects people who have an idea for a product with people who want to build and buy their idea.</Typography>
                        </Grid>
                    </Grid>
                    <Grid container justify='center' spacing={8}>
                        <Grid item container xs={12} xl={12} justify='center'>
                            <Typography variant='h2' align='center'>Your ideas into action.</Typography>
                        </Grid>
                        <Grid item container xs={10} xl={10} justify='center'>
                            <Typography variant='h5' align='center'>Once your idea is submitted, buyers have the opportunity to express interest and our manufacturers can turn your idea into a reality.</Typography>
                        </Grid>
                    </Grid>
                    <Grid container justify='center' spacing={8}>
                        <Grid item container xs={12} xl={12} justify='center'>
                            <Typography variant='h2' align='center'>Turn your idea into a reality and make money in the process.</Typography>
                        </Grid>
                        <Grid item container xs={10} xl={10} justify='center'>
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
                    </Grid> */}
                </Container>

            </div>
        </div>
    );
};

export default Home;
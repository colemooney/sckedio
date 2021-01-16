import React, { useEffect } from 'react';
import NavBar from '../../components/navBar/NavBar';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const PageLayout = ({ pageData }) => {

    const styles = {
        topSectionBackground: {
            height: 1000,
            backgroundImage: `url(${pageData.header.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top-center',
            backgroundRepeat: 'no-repeat',
            width: `calc(100vw + 40px)`,
            // width: "100%",
            // margin: 0,
            padding: 70,
            paddingBottom: 0
        },
        smallWhiteboardImage: {
            borderColor: 'transparent'
        },
        bottomSectionBackground: {
            height: 600,
            maxHeight: 1000,
            backgroundImage: `url(${"../../images/pexels-andreea-ch-1166644.jpg"})`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom-center',
            backgroundRepeat: 'no-repeat',
            width: `calc(100vw + 40px)`,
            padding: 0,
        },
        sectionText: {
            position: 'absolute',
            padding: 30
        },
        middleSection: {
            display: 'flex',
            justifyContent: 'center'
        },
        middleSectionBlock: {
            display: 'flex',
            flexDirection: 'column',
        }
    };

    return (
        <Grid container spacing={0} direction='row' justify='center' >{/*All page content */}

            {/*Top section */}
            <Grid item style={styles.topSectionBackground} xs={12}>{/*Photo background and container of top panel of marketplace text+smaller image*/}
                <Grid container direction='row' justify='center'>{/*Container of "The marketplace..." text and image on right */}
                    <Grid item xs={12} md={6}>{/*The marketplace for ideas...+Sckedio connects... */}
                        <Typography variant='h2'>{pageData.header.title}</Typography>
                        <Typography variant='h5'>{pageData.header.subtitle}</Typography>
                        <Box align="center">
                            <Button variant="contained">{pageData.header.button}</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            {/*Middle section*/}
            <Grid container>
                {pageData.main.map(section => (
                    <>
                        {
                            section.image ?
                                <Grid item xs={12} md={6} style={styles.middleSection}>{/* Image of artisan drawing on whiteboard*/}
                                    <Grid style={styles.sectionText} md={4}>
                                        <Typography variant='h4'>{section.title}</Typography>
                                        <Typography variant='h6'>{section.subtitle}</Typography>
                                    </Grid>
                                    <Box display="flex" justifyContent="center" alignItems="center" backgroundSize="contain">
                                        <img src={require("../../images/artisan.jpg")} id="artisan-image" width="100%" alt="artisan-image" />
                                    </Box>
                                </Grid>
                                :
                                <Grid item xs={12} md={6} style={styles.middleSectionBlock}>{/* Image of artisan drawing on whiteboard*/}
                                    <Grid style={styles.sectionText} md={4}>
                                        <Typography variant='h4'>{section.title}</Typography>
                                        <Typography variant='h6'>{section.subtitle}</Typography>
                                    </Grid>
                                </Grid>
                        }
                    </>
                ))}
            </Grid>
        </Grid>
    );
};

export default PageLayout;
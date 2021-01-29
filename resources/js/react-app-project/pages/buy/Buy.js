import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import NavBar from '../../components/navBar/NavBar';
import DesignCard from '../../components/designCard/DesignCard';
import Typography from '@material-ui/core/Typography';
import fakeProducts from './fakeProducts';

const Buy = (props) => {

    // useEffect(()=>{
    //     const fakeProducts = fakeProducts;
    // });

    return (
        <div>
            <NavBar loggedIn={props.loggedIn} handleLogout={props.handleLogout} roles={props.roles} />
            <Container>
                <Box my={3}>
                    <Typography variant='h2'>Shop</Typography>
                </Box>
                <Grid container spacing={3}>
                    {fakeProducts.map((product, i) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={i} align='center'>
                            <DesignCard
                                product={product}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default Buy;
import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import NavBar from '../../components/navBar/NavBar';
import DesignCard from '../../components/designCard/DesignCard';
import fakeProducts from './fakeProducts';

const Buy = (props) => {

    useEffect(()=>{
        const fakeProducts = fakeProducts;
    });

    return (
        <div>
            <NavBar loggedIn={props.loggedIn} handleLogout={props.handleLogout} />
            <Container>
                <h1>Buy Page</h1>
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
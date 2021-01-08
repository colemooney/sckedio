import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import NavBar from '../../components/navBar/NavBar';
import DesignCard from '../../components/designCard/DesignCard';

const fakeProducts = [
    {
        seller: "Jim's Designs",
        productTitle: 'Custom Jacket',
        interest: 3,
        image: 'https://picsum.photos/225/280'
    },
    {
        seller: "Kate's Designs",
        productTitle: 'Dog Bed',
        interest: 20,
        image: 'https://picsum.photos/225/280'
    },
    {
        seller: "Tim's Guitars",
        productTitle: '5 String Guitar',
        interest: 1,
        image: 'https://picsum.photos/225/280'
    },
    {
        seller: "Crazy Shirts",
        productTitle: 'A Crazy Shirt',
        interest: 13,
        image: 'https://picsum.photos/225/280'
    },
]

const Buy = (props) => {
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
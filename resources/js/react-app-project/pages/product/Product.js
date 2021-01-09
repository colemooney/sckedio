import React from 'react';
import Container from '@material-ui/core/Container';
import NavBar from '../../components/navBar/NavBar';

const Product = (props)=> {
    return (
        <div>
            <NavBar loggedIn={props.loggedIn} handleLogout={props.handleLogout} />
            <Container>
                <h1>Product</h1>
            </Container>
        </div>
    );
};

export default Product;
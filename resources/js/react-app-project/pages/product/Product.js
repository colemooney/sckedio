import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import NavBar from '../../components/navBar/NavBar';
import { useParams } from 'react-router-dom';
import fakeProducts from '../buy/fakeProducts';

const useStyles = makeStyles((theme) => ({
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
    }
}));

const Product = (props)=> {
    const classes = useStyles();
    const { id } = useParams();
    console.log(props)
    const [product,setProduct] = React.useState();
    const [loading, setLoading] = React.useState(true);

    useEffect(()=>{
        for (let i=0;i<fakeProducts.length;i++) {
            if (fakeProducts[i].itemNum==id) {
                
                setProduct(fakeProducts[i]);
                setLoading(false);
            }
        }

    });

    return (
        <div>
            <NavBar loggedIn={props.loggedIn} handleLogout={props.handleLogout} />
            {loading ? 
            <div className={classes.center}>
                <CircularProgress /> 
            </div> :
            <Container>
                <h1>{product.productTitle}</h1>
                <img src={product.image} width='225px' />
                <p>Designer: {product.designer}</p>
                <p>Interest: {product.interest}</p>
            </Container> }
        </div>
    );
};

export default Product;
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
    // accounts: {
    //     marginTop: theme.spacing(2)
    // },
    // backgroundColor: {
    //     backgroundColor: 'blue'
    // },
    // bold: {
    //     fontWeight: 500
    // },
    currentProductThumbnail: {
        maxWidth: 50,
        marginRight: theme.spacing(1),
        cursor: 'pointer',
        border: '1px solid blue'
    },
    infoSection: {
        minHeight: 350,
    },
    productImage: {
        maxWidth: '100%',
        border: '1px solid lightgrey',
        [theme.breakpoints.up('sm')]: {
            marginBottom: theme.spacing(2)
        }
    },
    productThumbnail: {
        maxWidth: 50,
        marginRight: theme.spacing(1),
        cursor: 'pointer',
        border: '1px solid lightgrey'
    },
    root: {
        flexGrow: 1
    }

}));

const ProductInfoDisplay = (props) => {
    const classes = useStyles();
    const {
        currentImage,
        setCurrentImage,
        imageArr,
        handleImageClick
    } = props;
    const {
        designer,
        productTitle,
        interest,
        image,
        itemNum,
        category,
        description
    } = props.product;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <div className={classes.root}>
                    <div>
                    <Box my={3}>
                        <Typography variant='h3'>{category}</Typography>
                    </Box>
                    <Grid container spacing={4}>
                        <Grid container item xs={12} md={4} justify='center'>
                            <Grid item xs={12} sm={8} md={12}>
                                <img className={classes.productImage} src={currentImage} />
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} md={5} className={classes.infoSection}>
                            {/* <div className={classes.infoSection}> */}
                                <Grid item xs={12}>
                                    <Typography variant='h4' gutterBottom>
                                        {productTitle}
                                    </Typography>
                                    <Typography variant='h6' >
                                        {designer}
                                    </Typography>
                                    <Typography variant='h6' >
                                        Interest: {interest}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant='h5' gutterBottom>
                                        Description
                                    </Typography>
                                    <Typography variant='body1'>
                                        {description}
                                    </Typography>
                                    <Divider />
                                </Grid>
                                <Grid item>
                                    {imageArr.map((individualImage, i)=> (
                                            <img className={individualImage.active ? classes.currentProductThumbnail : classes.productThumbnail} src={individualImage.src} key={i} data-key={i} onClick={event=>handleImageClick(event.target)} />
                                    ))}
                                </Grid>
                            {/* </div> */}
                        </Grid>
                        <Grid container item xs={12} md={3} justify='center'>
                            <Box border={1} width={400} height={200} borderRadius='borderRadius' borderColor='grey.500' p={2}>
                                <Grid container spacing={2}>
                                    <Grid item container xs={12} justify='center'>
                                        <Typography variant='h5' gutterBottom>
                                            Buy Now
                                        </Typography>
                                    </Grid>
                                    <Grid item container xs={12} justify='center'>
                                        <Button variant='contained' color='primary'>Interested</Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                    </div>
        </div>
    );

};

export default ProductInfoDisplay;
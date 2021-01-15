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
    productImage: {
        maxWidth: '100%',
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
        category
    } = props.product;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <div className={classes.root}>
            {isMobile ? (
                <Grid container spacing={1}>
                    {/* <Grid item xs={6}>
                        <img className={classes.profileImage} src={profilePhoto} />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h4' gutterBottom>
                            {firstName} {lastName}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                            variant='h6'
                            color='textSecondary'
                        >
                            ACCOUNT TYPE
                        </Typography>
                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            Designer, Buyer
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h6' color='textSecondary'>
                            INFORMATION
                        </Typography>
                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.bold}>
                            Username:
                        </Typography>
                        <Typography>
                            {username}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.bold}>
                            Email:
                        </Typography>
                        <Typography>
                            {email}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.bold}>
                            Address:
                        </Typography>
                        <Typography>
                            {street}<br />{city}, {state}<br />{postalCode}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.bold}>
                            Country:
                        </Typography>
                        <Typography>
                            {country}
                        </Typography>
                    </Grid> */}
                </Grid>
            ) : (
                    <div>
                    <Box my={3}>
                        <Typography variant='h3'>{category}</Typography>
                    </Box>
                    <Grid container spacing={4}>
                        <Grid container item xs={4}>
                            <Grid item xs={12}>
                                <img className={classes.productImage} src={currentImage} />
                            </Grid>
                        </Grid>
                        <Grid container item xs={5} >
                            <Grid item xs={12}>
                                <Typography variant='h4' gutterBottom>
                                    {productTitle}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant='h6' color='textSecondary'>
                                    {designer}
                                </Typography>
                                <Typography variant='h6' color='textSecondary'>
                                    Interest: {interest}
                                </Typography>
                                <Divider />
                            </Grid>
                            <Grid item>
                                {imageArr.map((individualImage, i)=> (
                                        <img className={individualImage.active ? classes.currentProductThumbnail : classes.productThumbnail} src={individualImage.src} key={i} data-key={i} onClick={event=>handleImageClick(event.target)} />
                                ))}
                            </Grid>
                        </Grid>
                        <Grid container item xs={3}>
                            <Box border={1} width={'100%'} height={200} borderRadius='borderRadius' borderColor='grey.500' p={2}>
                                <Grid container spacing={2}>
                                    <Grid item container xs={12} justify='center'>
                                        <Typography variant='h4' gutterBottom>
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
                )}
        </div>
    );

};

export default ProductInfoDisplay;
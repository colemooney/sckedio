import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        maxWidth: 225,
    },
    media: {
        height: 280,
        width: 225,
    }
})

const DesignCard = (props) => {
    const classes = useStyles();
    let history = useHistory();
    const {
        designer,
        productTitle,
        interest,
        image,
        itemNum
    } = props.product;

    return (
        <Card className={classes.root}>
            <CardActionArea onClick={()=>history.push(`/product/${itemNum}`)}>
                <CardMedia
                    className={classes.media}
                    image={image}
                    title={productTitle}
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                        {designer}
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        {productTitle}
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        Interest: {interest}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size='small' color='primary'>
                    Interested
                </Button>
                <Button size='small' color='primary'>
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
};

export default DesignCard;
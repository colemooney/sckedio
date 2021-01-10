import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import HeaderImage from '../../../../assets/header-bg-3-2-1-200x300.jpg';

const useStyles = makeStyles({
    headerSection: {
        backgroundImage: `linear-gradient(180deg,#ffffff 0%,rgba(255,255,255,0) 100%),url(${HeaderImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        display: 'flex',
        justifyContent: 'center',
        height: 1180
    },
    media: {
        height: 280,
        width: 225,
    },
    header: {
        color: '#333333',
        fontSize: 65,
        marginTop: 150
    },
    textContainer: {
        width: '55%',
        textAlign: 'center'
    },
    mainText: {
        lineHeight: 2,
        fontSize: 18
    },
    button: {
        backgroundColor: '#F4583F',
        color: '#FFFFFF'
    },
    container: {
        width: '100%',
        height: 500,
        position: 'absolute'
    },
    midSectionLeft: {
        width: '50%',
        height: 100
    },
    midSectionRight: {
        width: '50%',
        height: 100
    }
});

const Section = (props) => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.headerSection}>
                <div className={classes.textContainer}>
                    <h1 className={classes.header}>Sell Your Idea</h1>
                    <p className={classes.mainText}>Do you have an awesome idea for a product? Then Sckedio is the right place for you! Sckedio is a platform to sell your unique product ideas and designs. You can upload anything from just an idea to a fully designed product. </p>
                    <Button className={classes.button} variant="contained">Get Started</Button>
                </div>
            </div>
        </div>
    );
};

export default Section;
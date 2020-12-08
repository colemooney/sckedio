import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const NavBar = (props) => {
    const { history, location } = props;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
    const [currentLocationURL, setCurrentLocationURL] = React.useState(location.pathname); 

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClick = (pageURL) => {
        history.push(pageURL);
        setAnchorEl(null);
    };

    const handleButtonClick = (pageURL) => {
        history.push(pageURL);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Sckedio
                    </Typography>
                    <div>
                        {isMobile ? (
                            <div>
                                <IconButton
                                    edge="start"
                                    className={classes.menuButton}
                                    color="inherit"
                                    aria-label="menu"
                                    onClick={handleMenu}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={() => setAnchorEl(null)}
                                >
                                    <MenuItem onClick={() => handleMenuClick('/')}>
                                        <Typography 
                                            color={currentLocationURL==='/' ? 'secondary' : 'initial'}
                                        >
                                            Home
                                        </Typography>
                                    </MenuItem>
                                    <MenuItem onClick={() => handleMenuClick('/sell')}>
                                        <Typography 
                                            color={currentLocationURL==='/sell' ? 'secondary' : 'initial'}
                                        >
                                            Sell
                                        </Typography>
                                    </MenuItem>
                                </Menu>
                            </div>
                        ) :
                            (
                                <div>
                                <Button
                                    color={currentLocationURL==='/' ? 'secondary' : 'default'}
                                    onClick={()=>handleButtonClick('/')}
                                >
                                    Home
                                </Button>
                                <Button
                                    color={currentLocationURL==='/sell' ? 'secondary' : 'default'}
                                    onClick={()=>handleButtonClick('/sell')}
                                >
                                    Sell
                                </Button>
                                </div>
                            )}

                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withRouter(NavBar);
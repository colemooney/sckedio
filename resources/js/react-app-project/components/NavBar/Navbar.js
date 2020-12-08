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
    const classes = useStyles();
    const { history, location } = props;
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
            <AppBar
                position="static"
                color="transparent"
            >
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
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
                                            color={currentLocationURL === '/' ? 'primary' : 'initial'}
                                        >
                                            Home
                                        </Typography>
                                    </MenuItem>
                                    <MenuItem onClick={() => handleMenuClick('/sell')}>
                                        <Typography
                                            color={currentLocationURL === '/sell' ? 'primary' : 'initial'}
                                        >
                                            Sell
                                        </Typography>
                                    </MenuItem>
                                    <MenuItem onClick={() => handleMenuClick('/buy')}>
                                        <Typography
                                            color={currentLocationURL === '/buy' ? 'primary' : 'initial'}
                                        >
                                            Buy
                                        </Typography>
                                    </MenuItem>
                                    <MenuItem onClick={() => handleMenuClick('/build')}>
                                        <Typography
                                            color={currentLocationURL === '/build' ? 'primary' : 'initial'}
                                        >
                                            Build
                                        </Typography>
                                    </MenuItem>
                                </Menu>
                            </div>
                        ) :
                        (
                            <div>
                                <Button
                                    onClick={() => handleButtonClick('/')}
                                >
                                    <Typography
                                        color={currentLocationURL === '/' ? 'primary' : 'initial'}
                                    >
                                        Home
                                    </Typography>
                                </Button>
                                <Button
                                    color={currentLocationURL === '/sell' ? 'primary' : 'default'}
                                    onClick={() => handleButtonClick('/sell')}
                                >
                                    <Typography
                                        color={currentLocationURL === '/sell' ? 'primary' : 'initial'}
                                    >
                                        Sell
                                    </Typography>
                                </Button>
                                <Button
                                    color={currentLocationURL === '/buy' ? 'primary' : 'default'}
                                    onClick={() => handleButtonClick('/buy')}
                                >
                                    <Typography
                                        color={currentLocationURL === '/buy' ? 'primary' : 'initial'}
                                    >
                                        Buy
                                    </Typography>
                                </Button>
                                <Button
                                    color={currentLocationURL === '/build' ? 'primary' : 'default'}
                                    onClick={() => handleButtonClick('/build')}
                                >
                                    <Typography
                                        color={currentLocationURL === '/build' ? 'primary' : 'initial'}
                                    >
                                        Build
                                    </Typography>
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
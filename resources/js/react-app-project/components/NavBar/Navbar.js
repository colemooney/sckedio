import React, { useEffect } from 'react';
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
import auth from '../../auth';
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
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [currentLocationURL, setCurrentLocationURL] = React.useState(location.pathname);
    const loggedIn = props.loggedIn;

    const navItems = [
        {
            itemName: 'Home',
            itemPath: '/'
        },
        {
            itemName: 'Sell',
            itemPath: '/sell'
        },
        {
            itemName: 'Buy',
            itemPath: '/buy'
        },
        {
            itemName: 'Build',
            itemPath: '/build'
        },
        {
            itemName: 'About',
            itemPath: '/about'
        }
    ];

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

    const handleLogout = () => {
        auth.logout(()=>{
            props.setLoggedIn(false);
            localStorage.removeItem('token');
        });
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
                                    {navItems.map((item, i) => (
                                        <MenuItem key={i} onClick={() => handleMenuClick(item.itemPath)}>
                                            <Typography
                                                color={currentLocationURL === item.itemPath ? 'primary' : 'initial'}
                                            >
                                                {item.itemName}
                                            </Typography>
                                        </MenuItem>
                                    ))}
                                    {loggedIn ?
                                        (
                                        <>
                                        <MenuItem onClick={() => handleMenuClick('/profile')}>
                                            <Typography
                                                color={currentLocationURL === '/profile' ? 'primary' : 'initial'}
                                            >
                                                Profile
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem onClick={() => handleLogout()}>
                                            <Typography
                                                color='error'
                                            >
                                                Log Out
                                            </Typography>
                                        </MenuItem>
                                        </>
                                        ) :
                                        (<MenuItem onClick={() => handleMenuClick('/login')}>
                                            <Typography
                                                color={'initial'}
                                            >
                                                Login
                                            </Typography>
                                        </MenuItem>)
                                    }
                                </Menu>
                            </div>
                        ) :
                            (
                                <div>
                                    {navItems.map((item, i) => (
                                        <Button
                                            key={i}
                                            onClick={() => handleButtonClick(item.itemPath)}
                                        >
                                            <Typography
                                                color={currentLocationURL === item.itemPath ? 'primary' : 'initial'}
                                            >
                                                {item.itemName}
                                            </Typography>
                                        </Button>
                                    ))}
                                    {loggedIn ? (
                                        <>
                                        <Button
                                            onClick={() => handleButtonClick('/profile')}
                                        >
                                            <Typography
                                                color={currentLocationURL === '/profile' ? 'primary' : 'initial'}
                                            >
                                                Profile
                                            </Typography>
                                        </Button>
                                        <Button
                                            onClick={() => handleLogout()}
                                        >
                                            <Typography
                                                color='error'
                                            >
                                                Log Out
                                            </Typography>
                                        </Button>
                                        </>
                                    ) :
                                        (
                                            <Button
                                                onClick={() => handleButtonClick('/login')}
                                            >
                                                <Typography
                                                    color={'initial'}
                                                >
                                                    Login
                                            </Typography>
                                            </Button>
                                        )}
                                </div>
                            )
                        }
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withRouter(NavBar);
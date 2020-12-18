import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import About from './pages/about/About';
import Build from './pages/build/Build';
import Buy from './pages/buy/Buy';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import Sell from './pages/sell/Sell';
import auth from './auth';

/* Anything that has register is temporary */
import Register from './pages/register/Register';
import CreateAccount from './pages/createAccount/CreateAccount';



const App = () => {
    const [loggedIn,setLoggedIn] =React.useState(false);
    const [loading,setLoading] = React.useState(true);

    useEffect(()=>{
        const jwToken = localStorage.getItem('token');
        if (jwToken) {
            auth.login(()=>{
                setLoggedIn(true);
            });
        }
        setLoading(false);
    });
    
    return (
        loading ? <h1>loading</h1> :
        <React.Fragment>
            <CssBaseline />
            <Router>
                <Switch>
                    <Route exact path='/' component={()=><Home loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
                    <Route exact path='/sell' component={()=><Sell loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
                    <Route exact path='/buy' component={()=><Buy loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
                    <Route exact path='/build' component={()=><Build loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
                    <Route exact path='/about' component={()=><About loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
                    <ProtectedRoute exact path='/profile' component={()=><Profile loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
                    <Route exact path='/create-account' component={CreateAccount} />
                    <Route exact path='/login' component={()=><Login setLoggedIn={setLoggedIn} />} />

                    <Route exact path='/register' component={Register} />

                    <Route path='*' component={()=> '404 NOT FOUND'} />
                </Switch>
            </Router>
        </React.Fragment>
    );
};

export default App;
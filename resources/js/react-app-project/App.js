import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import About from './pages/about/About';
import Build from './pages/build/Build';
import Buy from './pages/buy/Buy';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Sell from './pages/sell/Sell';

/* Anything that has register is temporary */
import Register from './pages/register/register';


const App = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Router>
                <Route exact path='/' component={Home} />
                <Route exact path='/sell' component={Sell} />
                <Route exact path='/buy' component={Buy} />
                <Route exact path='/build' component={Build} />
                <Route exact path='/about' component={About} />
                <Route exact path='/profile' component={Profile} />

                <Route exact path='/register' component={Register} />
            </Router>
        </React.Fragment>
    );
};

export default App;
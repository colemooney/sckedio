import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import About from './pages/about/about';
import Build from './pages/build/build';
import Buy from './pages/buy/buy';
import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import Sell from './pages/sell/sell';


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
            </Router>
        </React.Fragment>
    );
};

export default App;
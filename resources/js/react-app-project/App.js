import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './pages/home/home';
import Sell from './pages/sell/sell';

const App = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Router>
                <Route exact path='/' component={Home} />
                <Route exact path='/sell' component={Sell} />
            </Router>
        </React.Fragment>
    );
};

export default App;
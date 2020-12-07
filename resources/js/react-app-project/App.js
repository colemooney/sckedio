import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/home/home';
import Sell from './pages/sell/sell';

const App = () => {
    return (
        <Router>
            <Route exact path='/' component={Home} />
            <Route exact path='/sell' component={Sell} />
        </Router>
    );
};

export default App;
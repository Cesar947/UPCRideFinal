import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../components/Login';
import Home from '../components/Home';
import Trip from '../components/Trips/Trip';
import MyTrips from '../components/User/MyTrips';
import Review from '../components/Review/Review';

const Routes = () => (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/home/user/:userid" component={Home} />
                <Route path="/trips/:tripid" component={Trip}/>
                <Route path = "/user/:userid/trips" component={MyTrips}/>
                <Route path="/review" component={Review}/>
            </Switch>
        </Router>
);



export default Routes;
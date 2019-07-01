import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../components/Login';
import Home from '../components/Home';
import Trip from '../components/Trips/Trip';
import MyTrips from '../components/User/MyTrips';
import MyRequests from '../components/User/MyRequests';
import Request from '../components/Request';
import TripState from '../components/TripState';
import Review from '../components/Review/Review';
import Posteo from '../components/PostTrip/Posteo';
import HomeSearch from '../components/Home/HomeSearch';
import SelectRol from '../components/Register/SelectRol';
import Logear from '../components/Login/logear';


const Routes = () => (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/register/select/" component={SelectRol} />
                <Route path="/prueba" component={Logear} />
                <Route path="/home/user/:userid" component={Home} />
                <Route path="/user/:userid/trips/:tripid" component={Trip}/>
                <Route path = "/user/:userid/mytrips" component={MyTrips}/>
                <Route path = "/user/:userid/myrequests" component={MyRequests}/>
                <Route path = "/user/:userid/request/trips/:tripid" component={Request}/>
                <Route path = "/user/:userid/:tripid" component={TripState}/>
                <Route path = "/post/user/:userid/new/trip" component={Posteo}/>

                <Route path = "/home/:userid/search/from/:puntoPartida/to/:puntoDestino/at/:horaPartida/and/:horaLlegada/on/:fecha" component={HomeSearch}/>
                <Route path="/review" component={Review}/>

            </Switch>
        </Router>
);



export default Routes;
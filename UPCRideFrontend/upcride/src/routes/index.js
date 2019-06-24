import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../components/Login/Login';
import SelectRol from '../components/SelectRol/SelectRol';
import UserRegister from '../components/Register/UserRegister';
import DriverRegister from '../components/Register/DriverRegister';
import HomePage from './HomePage';


const Routes = () => (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/SelectRol" component={SelectRol} />
                <Route path="/passenger/register" component={UserRegister}/>
                <Route path="/driver/register" component={DriverRegister} />
                <Route path="/home" component={HomePage} />
            </Switch>
        </Router>
);

export default Routes;
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './components/Login';
import ChooseContainer from './container/ChooseContainer';
import DriverRegisterContainer from './container/DriverRegisterContainer';
import PassengerRegisterContainer from './container/PassengerRegisterContainer';
import HomeContainer from './container/HomeContainer';
import SolicitudContainer from './container/SolicitudContainer';

const Routes = () =>{
    return(
        <Switch>
            <Route exact path = "/" component={Login} />
            <Route exact path = "/solicitud" component={SolicitudContainer} />
            <Route exact path = "/choose" component={ChooseContainer} />
            <Route exact path = "/home" component={HomeContainer} />
            <Route exact path = "/driver/register" component={DriverRegisterContainer} />
            <Route exact path = "/passenger/register" component={PassengerRegisterContainer} />
        </Switch>
    );
}

export default Routes;
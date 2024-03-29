import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from "prop-types";

import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import './NavBar.css';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

class TBar extends React.Component {

  static propTypes = {
    usuarios: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    let misViajes = false;
    let misRequests = false;
    this.state = {
      usuarios: [],
      misViajes, 
      misRequests,
      id: this.props.id
    }
    this.misViajes = this.misViajes.bind(this)
    this.misRequests = this.misRequests.bind(this)
    this.inicio = this.inicio.bind(this)
  }

  misViajes(){
    this.setState({
      misViajes: true
    })
  }

  misRequests(){
    this.setState({
      misRequests: true
    })
  }

  inicio(){
    this.setState({
      inicio: true
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.usuarios) {
      this.setState({ usuarios: nextProps.usuarios })
    }
  }


  render() {
    if (this.state.misViajes) {
      return <Redirect to={"/user/" + this.state.id + "/mytrips"} />
    }
    if (this.state.misRequests) {
      return <Redirect to={"/user/" + this.state.id + "/myrequests"} />
    }
    if (this.state.inicio) {
      return <Redirect to={"/home/user/" + this.state.id} />
    }
    return (
      <div>
        <AppBar position="relative">
          <Toolbar className="NavBar" >
            <img src={process.env.PUBLIC_URL + '/resources/Logo.png'} alt="logo" className="Logo" />
            <div></div>
    
            <Button className="Inicio " onClick={this.inicio}>
              Inicio
                </Button>
            <Avatar className="User">
              P
            </Avatar>
            <Button className="MiItinerario " onClick={this.misRequests}>
              Mis Solicitudes
                </Button>
                
            <Button className="MisViajes " onClick={this.misViajes}>
              Mis viajes
                </Button>
            <Typography className="Usuario">
              {this.state.usuarios.nombres}
            </Typography>

          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default TBar;
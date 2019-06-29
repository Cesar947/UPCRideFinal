import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from "prop-types";

import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import './Home.css';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

class Bar extends React.Component {

  static propTypes = {
    usuarios: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    let misViajes = false;
    this.state = {
      usuarios: [],
      misViajes
    }
    this.misViajes = this.misViajes.bind(this)
    this.inicio = this.inicio.bind(this)
  }

  misViajes() {
    this.setState({
      misViajes: true
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
      return <Redirect to="/user/misViajes" />
    }
    if (this.state.inicio) {
      return <Redirect to="/home" />
    }
    return (
      <div>
        <AppBar position="relative">
          <Toolbar className="NavBar" >
            <img src={process.env.PUBLIC_URL + 'images/Logo.png'} alt="logo" className="Logo" />
            <div></div>
    
            <Button className="Inicio " onClick={this.inicio}>
              Inicio
                </Button>
                <Avatar className="User">
              P
            </Avatar>
            <Button className="MiItinerario " onClick={this.misViajes}>
              Mi Itinerario
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

export default Bar;
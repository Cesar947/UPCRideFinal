import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import './Home.css';

const sections = [
    'Inicio',
    'Mis viajes',
    'Mis anuncios',
    'Mis solicitudes',
  ];


class NavBar extends React.Component{
    render(){
        return(
            <AppBar position="relative">
            <Toolbar className="NavBar" >
              <img src={process.env.PUBLIC_URL + 'images/Logo.png'} alt="logo" className="Logo" />
              {sections.map(section => (
                <Button
                  color="textPrimary"
                  noWrap
                  key={section}
                  variant="body2"
                  href="#"
                  className="ToolbarLink"
                >
                  <a className="Guias" >{section}</a>
                </Button>
              ))}
            </Toolbar>
          </AppBar>
        );
    }
}

export default NavBar;
import React from 'react';
import PropTypes from "prop-types";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Bar extends React.Component {

    static propTypes = {
        usuarios: PropTypes.array.isRequired
    };

    constructor(props) {
      super(props);
      this.state = {
        usuarios: []
      }
      
    }
  
    componentWillReceiveProps(nextProps) {
        if (nextProps.usuarios) {
            this.setState({ usuarios: nextProps.usuarios })
        }
    }
  
  
    render() {
      return (
          <div>
        <AppBar position="relative">
          <Toolbar className="NavBar" >
            <img src={process.env.PUBLIC_URL + 'images/Logo.png'} alt="logo" className="Logo" />
            {this.state.usuarios.map((usuario, index) => (
                <div key={index}> 
                <Typography className="Usuario">
                    {usuario.nombres}
                </Typography></div>
            ))}
          </Toolbar>
        </AppBar>
        </div>
      );
    }
  }

  export default Bar;
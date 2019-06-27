import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from "prop-types";

import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import './Home.css';

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
                <Typography className="Usuario">
                    {this.state.usuarios.nombres}
                </Typography>
                <Avatar aria-label="Recipe" className="User">
                                        P
                                     </Avatar>
          </Toolbar>
        </AppBar>
        </div>
      );
    }
  }

  export default Bar;
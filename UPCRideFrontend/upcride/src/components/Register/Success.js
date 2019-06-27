import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Redirect} from 'react-router-dom';
import {fetchUsuario} from '../../actions/usuariosActions';
import { LISTAR_USUARIO } from '../../actions/actionTypes';
import {connect} from "react-redux";


export class Success extends Component {
  constructor(props){
      super(props);
      let ready = false;
      this.state = {
        ready
      }
      this.goHome = this.goHome.bind(this)
  }

  componentDidMount() {
    this.props.fetchUsuario();
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.actionType === LISTAR_USUARIO) {
      this.setState({ listausuarios: nextProps.listausuarios });
    }
  }

  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  goHome(){
    this.setState({
      ready: true
    })
    this.props.fetchUsuario;
  }

  render() {
    if(this.state.ready){
      return <Redirect to = "/home"/>
    }
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <Typography variant="h5" gutterBottom>
              Bienvenido a UPC Ride
                  </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography variant="subtitle1">
              Gracias por unirte a esta Comunidad
                  </Typography>
          </Grid>
          <Button
            primary={true}
            onClick={this.goHome}
          >
            Ir al Home
          </Button>
        </Grid>
      </div>
    );
  }
}

const mapState = state => {
  return {
      listausuarios: state.usuario.usuarios,
      actionType: state.usuario.actionType
  }
};

const mapDispatch = {
    fetchUsuario
};


export default connect(mapState, mapDispatch)(Success);
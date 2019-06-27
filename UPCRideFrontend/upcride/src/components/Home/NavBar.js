import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Bar from '../../components/Home/Bar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import './Home.css';
import { LISTAR_USUARIO } from '../../actions/actionTypes';
import {fetchUsuario} from '../../actions/usuariosActions';
import {connect} from "react-redux";
import Typography from '@material-ui/core/Typography';

const sections = [
  'Inicio',
  'Mis viajes',
  'Mis anuncios',
  'Mis solicitudes',
];


class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listausuarios: []
    }
  }

  componentDidMount() {
    this.props.fetchUsuario();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.actionType === LISTAR_USUARIO) {
      this.setState({ listausuarios: nextProps.listausuarios });
    }
  }

  render() {
    return (
      <Bar usuarios = {this.state.listausuarios}/>
    );
  }
}

const mapState = state => {
  return {
      listausuarios: state.usuario.usuario,
      actionType: state.usuario.actionType
  }
};

const mapDispatch = {
    fetchUsuario
};

export default connect(mapState, mapDispatch)(NavBar);
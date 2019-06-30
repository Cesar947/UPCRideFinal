import React from 'react';
import TBar from './TBar';
import {LISTAR_USUARIO} from '../../actions/actionTypes';
import { connect } from 'react-redux';
import {fetchUsuario} from '../../actions/userActions';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      listausuarios: [],
      
    }
  }

  componentDidMount() {
    this.props.fetchUsuario(this.state.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.actionType === LISTAR_USUARIO) {
      this.setState({ listausuarios: nextProps.listausuarios });
    }
  }

  render() {
    return (
      <TBar id={this.state.id} usuarios = {this.state.listausuarios}/>
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

export default connect(mapState, mapDispatch)(NavBar);
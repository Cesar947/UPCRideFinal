import React from 'react';
import ViajesXUsuario from './ViajesXUsuario';
import NavBar from '../Home/NavBar';
import { LISTAR_USUARIO } from '../../actions/actionTypes';
import {fetchUsuario} from '../../actions/usuariosActions';
import {connect} from "react-redux";

class ListaViajes extends React.Component{
    constructor(props){
        super(props);
        this.state={
            listausuarios:[]
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


    render(){
        return(
            <div>
                <NavBar/>
                <ViajesXUsuario usuarios = {this.state.listausuarios}/>
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
  
  export default connect(mapState, mapDispatch)(ListaViajes);


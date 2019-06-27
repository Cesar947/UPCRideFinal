import React from 'react';
import { VIAJES_USUARIO } from '../../actions/actionTypes';
import {connect} from "react-redux";
import {viajesXUsuario} from '../../actions/viajesActions';
import ViajesListados from './ViajesListados';
import PropTypes from "prop-types";

class ViajesXUsuario extends React.Component {

    static propTypes = {
        usuarios: PropTypes.array.isRequired
    };


    constructor(props) {
        super(props) 
        this.state = {
            usuarios: [],
            listaviajes:[]
        }
    }

    componentDidMount() {
        this.props.viajesXUsuario(1);
      }

    componentWillReceiveProps(nextProps) {
        if (nextProps.usuarios) {
            this.setState({ usuarios: nextProps.usuarios })
        }
        if (nextProps.actionType === VIAJES_USUARIO) {
            this.setState({ listaviajes: nextProps.listaviajes });
          }
    }

    render() {
        return (
            <div>
                <ViajesListados trips = {this.state.listaviajes}/>
            </div>
        );
    }
}

const mapState = state => {
    return {
        listaviajes: state.viaje.viajes,
        actionType: state.viaje.actionType
    }
  };
  
  const mapDispatch = {
     viajesXUsuario
  };

export default connect(mapState, mapDispatch)(ViajesXUsuario);


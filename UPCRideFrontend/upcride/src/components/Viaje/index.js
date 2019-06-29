import React from 'react';
import NavBar from '../Home/NavBar';
import ViajeDetallado from './ViajeDetallado';
import { selectViaje } from '../../actions/viajesActions';
import { connect } from "react-redux"
import { SELECT_VIAJE } from '../../actions/actionTypes';

class Viaje extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            listaviajes: [],
            origenLongitud: 0.0,
            origenLatitud: 0.0,
            destinoLongitud: 0.0,
            destinoLatitud: 0.0
        }
    }

    componentDidMount() {
        this.props.selectViaje(1)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.actionType === SELECT_VIAJE) {
            this.setState({
                listaviajes: nextProps.listaviajes,
                origenLongitud: nextProps.listaviajes.partidaLongitud,
                origenLatitud: nextProps.listaviajes.partidaLatitud,
                destinoLongitud: nextProps.listaviajes.destinoLongitud,
                destinoLatitud: nextProps.listaviajes.destinoLatitud
            });
        }
    }

    render() {
        return (
            <div>

                <NavBar />
                <ViajeDetallado viajes={this.state.listaviajes}/>
            </div>
        );
    }
}

const mapState = state => {
    return {
        listaviajes: state.viaje.viaje,
        actionType: state.viaje.actionType
    }
};

const mapDispatch = {
    selectViaje
};

export default connect(mapState, mapDispatch)(Viaje);

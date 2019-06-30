import React from 'react';
import NavBar from '../NavBar';
import TripDetail from './TripDetail';
import { selectViaje } from '../../actions/tripsActions';
import { connect } from "react-redux"
import { SELECT_VIAJE } from '../../actions/actionTypes';
import GoogleMap from '../GoogleMaps/GoogleMap';

class Trip extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            listaviajes: [],
            id: this.props.match.params.tripid,
            userid: this.props.match.params.userid
        }
    }

    componentDidMount() {
        this.props.selectViaje(this.state.id)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.actionType === SELECT_VIAJE) {
            this.setState({
                listaviajes: nextProps.listaviajes,
            });
            
        }

        
    }



    render() {
        return (
            <div>
                <NavBar id = {this.state.userid}/>
                
                <TripDetail userid = {this.state.userid} viajes={this.state.listaviajes}/>
                <GoogleMap  viajes={this.state.listaviajes} />
                
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


export default connect(mapState, mapDispatch)(Trip);
import React from 'react';
import { selectViaje } from '../../actions/tripsActions';
import { connect } from "react-redux"
import { SELECT_VIAJE } from '../../actions/actionTypes';
import PassengerList from './PassengerList';
import TripStats from './TripStats';

class TripState extends React.Component {

    constructor(props){
        super(props);
        this.state={
            listaviajes:[],
            userid: this.props.match.params.userid,
            viajeid: this.props.match.params.tripid
        }
    }

    componentDidMount() {
        this.props.selectViaje(this.state.viajeid)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.actionType === SELECT_VIAJE) {
            this.setState({
                listaviajes: nextProps.listaviajes,
            });
        }
    }



    render(){
        return(
            <div>
                <img src={process.env.PUBLIC_URL + 'resources/card.jpg'} className="Fondo" alt="logo" />
                <PassengerList viajeid={this.state.viajeid} />
                <TripStats viajes={this.state.listaviajes} />
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


export default connect(mapState, mapDispatch)(TripState);
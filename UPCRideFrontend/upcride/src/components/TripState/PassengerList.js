import React from 'react';
import ShowPassengerList from './ShowPassengerList';
import { SELECT_PASSENGERS } from '../../actions/actionTypes';
import {selectTripPassengers} from '../../actions/tripsActions';
import {connect} from 'react-redux';



class PassengerList extends React.Component{

    constructor(props){
        super(props);
        this.state={
            pasajeros: [],
            viajeid: this.props.viajeid
        }
    }

    componentDidMount(){
        this.props.selectTripPassengers(this.state.viajeid)
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.actionType === SELECT_PASSENGERS) {
            this.setState({ pasajeros: nextProps.pasajeros });
          }
    }

    render(){
        return(
            <div>
                <ShowPassengerList />
            </div>
        );
    }
}


const mapState = state => {
    return {
        pasajeros: state.viaje.pasajeros,
        actionType: state.viaje.actionType
    }
  };
  
  const mapDispatch = {
        selectTripPassengers
  };

  export default connect(mapState, mapDispatch)(PassengerList);
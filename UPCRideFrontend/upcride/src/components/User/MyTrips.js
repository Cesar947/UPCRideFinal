import React from 'react';
import UserTrips from './UserTrips';
import NavBar from '../NavBar';
import {viajesByConductor} from '../../actions/tripsActions';
import {VIAJES_USUARIO} from '../../actions/actionTypes';
import { connect } from "react-redux"

class MyTrips extends React.Component{
    constructor(props){
        super(props);
        this.state={
            trips:[],
            id: this.props.match.params.userid
        }
    }

    componentDidMount() {
        this.props.viajesByConductor(this.state.id);
      }

    componentWillReceiveProps(nextProps) {
        if (nextProps.actionType === VIAJES_USUARIO) {
            this.setState({ trips: nextProps.trips });
          }
    }

    render(){
        return(
            <div>
                <NavBar id = {this.state.id}/>
                <UserTrips userid={this.state.id} trips = {this.state.trips}/>
            </div>
        );
    }


}
  
const mapState = state => {
    return {
        trips: state.viaje.viajes,
        actionType: state.viaje.actionType
    }
  };
  
  const mapDispatch = {
    viajesByConductor
  };

export default connect(mapState, mapDispatch)(MyTrips);


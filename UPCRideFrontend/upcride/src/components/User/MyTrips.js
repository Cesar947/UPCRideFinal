import React from 'react';
import UserTrips from './UserTrips';
import NavBar from '../NavBar';

class MyTrips extends React.Component{
    constructor(props){
        super(props);
        this.state={
            trips:[],
            id: this.props.match.params.userid
        }
    }


    render(){
        return(
            <div>
                <NavBar/>
                <UserTrips trips = {this.state.trips}/>
            </div>
        );
    }


}
  
export default MyTrips;

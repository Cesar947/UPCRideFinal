import React from 'react';
import UserRequests from './UserRequests';
import NavBar from '../NavBar';
import {requestsByConductor} from '../../actions/userActions';
import {SOLICITUDES_USUARIO} from '../../actions/actionTypes';
import { connect } from "react-redux"

class MyRequests extends React.Component{
    constructor(props){
        super(props);
        this.state={
            requests:[],
            id: this.props.match.params.userid
        }
    }

    componentDidMount() {
        this.props.requestsByConductor(this.state.id);
      }

    componentWillReceiveProps(nextProps) {
        if (nextProps.actionType === SOLICITUDES_USUARIO) {
            this.setState({ requests: nextProps.requests });
          }
    }

    render(){
        return(
            <div>
                <NavBar id = {this.state.id}/>
                <UserRequests userid={this.state.id} requests = {this.state.requests}/>
            </div>
        );
    }


}
  
const mapState = state => {
    return {
        requests: state.usuario.solicitudes,
        actionType: state.usuario.actionType
    }
  };
  
  const mapDispatch = {
    requestsByConductor
  };

export default connect(mapState, mapDispatch)(MyRequests);
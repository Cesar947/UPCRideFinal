import React from 'react';
import TripsList from '../Trips/TripsList';
import './Home.css';
import NavBar from '../NavBar';
import {PostButton} from '../Buttons';
import SearchBar from '../SearchBar';
import {Redirect} from 'react-router-dom';
import {fetchViajesList} from '../../actions/tripsActions';
import {LISTAR_VIAJES} from '../../actions/actionTypes';
import {connect} from "react-redux";




class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listaviajes: [],
      id: this.props.match.params.userid
    }
  }

  componentDidMount() {
    this.props.fetchViajesList();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.actionType === LISTAR_VIAJES) {
      this.setState({ listaviajes: nextProps.listaviajes });
    }
  }


  render() {
    if(this.state.quierepost){
      return(
        <Redirect to="/post/viaje"/>
      );
    }
    return (
      <div>
        <NavBar id = {this.state.id}/>
        <SearchBar/>
        <PostButton className = " Postear" onClick={this.postear}>Publicar</PostButton>
        <div className="Viajes" xs="3">
        <TripsList trips={this.state.listaviajes} />
        </div>
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
    fetchViajesList
};


export default connect(mapState, mapDispatch)(Home);

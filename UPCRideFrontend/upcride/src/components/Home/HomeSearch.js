import React from 'react';
import TripsList from '../Trips/TripsList';
import './Home.css';
import NavBar from '../NavBar';
import {PostButton} from '../Buttons';
import SearchBar from '../SearchBar';
import {Redirect} from 'react-router-dom';
import {filtrarViajes} from '../../actions/tripsActions';
import {FILTRAR_VIAJES} from '../../actions/actionTypes';
import {connect} from "react-redux";




class HomeSearch extends React.Component {

  constructor(props) {
    super(props);
    let quierepost = false;
    this.state = {
      listaviajes: [],
      quierepost,
      puntoPartida: this.props.match.params.puntoPartida,
      puntoDestino: this.props.match.params.puntoDestino, 
      horaPartida: this.props.match.params.horaPartida,
      horaLlegada: this.props.match.params.horaLlegada,
      fecha: this.props.match.params.fecha,
      id: this.props.match.params.userid
    }
    this.postear = this.postear.bind(this)
  }

  postear(){
    this.setState({
      quierepost: true
    })
  }

  componentDidMount() {
    this.props.filtrarViajes(this.state.puntoPartida, this.state.puntoDestino, this.state.horaPartida, this.state.horaLlegada, this.state.fecha);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.actionType === FILTRAR_VIAJES) {
      this.setState({ listaviajes: nextProps.listaviajes });
    }
  }


  render() {
    if(this.state.quierepost){
      return(
        <Redirect to={"/post/user/" + this.state.id + "/new/trip"}/>
      );
    }
    return (
      <div>
        <NavBar id = {this.state.id}/>
        <div className="searchBar">
        <SearchBar userid={this.state.id}/>
        </div>
        <PostButton className = " Postear" onClick={this.postear}>Publicar</PostButton>
        <div className="Viajes" xs="3">
        <TripsList trips={this.state.listaviajes} userid={this.state.id} />
        </div>
      </div>

    );
  }
}

const mapState = state => {
  return {
      listaviajes: state.viaje.filtros,
      actionType: state.viaje.actionType
  }
};

const mapDispatch = {
    filtrarViajes
};


export default connect(mapState, mapDispatch)(HomeSearch);
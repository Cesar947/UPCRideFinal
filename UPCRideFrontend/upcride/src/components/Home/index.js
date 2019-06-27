import React from 'react';
import ViajesList from './Viajes';
import './Home.css';
import SearchBar from './SearchBar';
import NavBar from './NavBar';
import {connect} from "react-redux";
import {PostButton} from '../Button/index.js';

import {Redirect} from 'react-router-dom';
import {fetchViajesList} from '../../actions/viajesActions';

import {LISTAR_VIAJES} from '../../actions/actionTypes';



class Home extends React.Component {

  constructor(props) {
    super(props);
    let quierepost = false
    this.state = {
      listaviajes: [],
      quierepost
    }
  }

  postear(){
     this.setState({
       quierepost: true
     })
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
        <NavBar/>
        <SearchBar />
        <PostButton value="Publicar" onClick={this.postear}/>
        <div className="Viajes" xs="3">
          <ViajesList trips={this.state.listaviajes} />
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


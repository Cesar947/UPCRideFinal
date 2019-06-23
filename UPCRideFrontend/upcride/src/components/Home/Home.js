import React from 'react';
import Viajes from './Viajes';
import './Home.css';
import SearchBar from './SearchBar';
import NavBar from './NavBar';
import {connect} from "react-redux";


import {fetchViajes} from '../../actions/viajesActions';

import {LISTAR_VIAJES} from '../../actions/actionTypes';



class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listaviajes: []
    }
  }

  componentDidMount() {
    this.props.fetchViajes();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.actionType === LISTAR_VIAJES) {
      this.setState({ listaviajes: nextProps.listaviajes })
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <SearchBar />
        <div className="Viajes">
          <Viajes trips={this.state.listaviajes} />
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
  fetchViajes
};

export default connect(mapState, mapDispatch)(Home);


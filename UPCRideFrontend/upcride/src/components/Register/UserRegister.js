import React, { Component } from 'react';
import FormPassenger from './FormPassenger';
import Success from './Success';
import './Register.css';
import {fetchUsuario} from '../../actions/usuariosActions';
import { LISTAR_USUARIO } from '../../actions/actionTypes';
import {connect} from "react-redux";

export class UserForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      step: 1,
      listausuarios:[]
    };
}

componentDidMount() {
  this.props.fetchUsuario();
}

componentWillReceiveProps(nextProps) {
  if (nextProps.actionType === LISTAR_USUARIO) {
    this.setState({ listausuarios: nextProps.listausuarios });
  }
}
  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };



  render() {
    const { step } = this.state;

    switch (step) {
      case 1:
        return (
          <div>
            <img src={process.env.PUBLIC_URL + '../images/card.jpg'} className="Fondo" alt="logo" />
            <div className="Form">
              <FormPassenger
                nextStep={this.nextStep}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <img src={process.env.PUBLIC_URL + '../images/card.jpg'} className="Fondo" alt="logo" />
            <div className="Form">
              <Success afterSubmit= {this.props.fetchUsuario} />
            </div>
          </div>
        );
    }
  }
}

const mapState = state => {
  return {
      listausuarios: state.usuario.usuarios,
      actionType: state.usuario.actionType
  }
};

const mapDispatch = {
    fetchUsuario
};

export default connect(mapState, mapDispatch)(UserForm);
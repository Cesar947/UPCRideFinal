import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Success from './Success';
import './Register.css';

export class UserForm extends Component {
  state = {
    step: 1,
    codigoUPC: '',
    nombres: '',
    apellidos: '',
    correoupc: '',
    contraseña: '',
    sedeestudios: '',
    telefono: ''
  };

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

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { codigoUPC, nombres, apellidos, correoupc, contraseña, sedeestudios, telefono } = this.state;
    const values = { codigoUPC, nombres, apellidos, correoupc, contraseña, sedeestudios, telefono };


    switch (step) {
      case 1:
        return (
          <div>
            <img src={process.env.PUBLIC_URL + '../images/card.jpg'} className="Fondo" alt="logo" />
            <div className="Form">
              <FormUserDetails
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <img src={process.env.PUBLIC_URL + '../images/card.jpg'} className="Fondo" alt="logo" />
            <div className="Form">
              <Success />
            </div>
          </div>
        );
    }
  }
}

export default UserForm;
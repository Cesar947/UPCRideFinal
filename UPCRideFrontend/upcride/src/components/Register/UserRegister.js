import React, { Component } from 'react';
import FormPassenger from './FormPassenger';
import Success from './Success';
import './Register.css';
import {Redirect} from 'react-router-dom'


export class UserForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      step: 1,
      listausuarios:[]
    };
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
            <img src={process.env.PUBLIC_URL + '/resources/card.jpg'} className="Fondo" alt="logo" />
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
            <img src={process.env.PUBLIC_URL + '/resources/card.jpg'} className="Fondo" alt="logo" />
            <Success/>
          </div>
        );
    }
  }
}


export default UserForm;
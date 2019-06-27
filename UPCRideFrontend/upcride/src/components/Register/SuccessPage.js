import React from 'react';
import Success from "./Success";
import "./Register.css";


class SuccessPage extends React.Component{
    render(){
        return(
            <div>
            <img src={process.env.PUBLIC_URL + '../images/card.jpg'} className="Fondo" alt="logo" />
            <div className="Form">
              <Success />
            </div>
          </div>
        );
    }
}

export default SuccessPage;


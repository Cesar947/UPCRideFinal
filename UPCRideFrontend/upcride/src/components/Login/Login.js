import React from 'react';
import { LoginTextField } from '../Text';
import './Login.css';
import { LoginButton, RegisterButton } from '../Button';
import {Redirect} from 'react-router-dom';


class Login extends React.Component {

  constructor(props){
    super(props)
    let loggedIn = false
    this.state ={
      username: '',
      password:'',
      loggedIn
    }

    this.onChange = this.onChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitForm(e){
    e.preventDefault()
    const{username, password} = this.state
    ////
    if(username === "u201711033@upc.edu.pe" && password === "1234"){
      this.setState({
        loggedIn: true})
    }
  }

  render() {
    if(this.state.loggedIn){
      return <Redirect to="/home"/>
    }
    return (
      <div >

        <img src={process.env.PUBLIC_URL + 'images/fondo.jpg'} className="Fondo" alt="logo" />
        <form className="login" onSubmit={this.submitForm}>
          <LoginTextField
            className='LoginTextField'
            label="Correo UPC"
            variant="outlined"
            value={this.state.username}
            fullWidth
            onChange={this.onChange}
            name='username'
          />
          <br/>
          <br/>
          <LoginTextField
            className='LoginTextField'
            label="Contraseña"
            value={this.state.password}
            variant="outlined"
            id="custom-css-outlined-input"
            fullWidth
            type="password"
            name='password'
            onChange={this.onChange}
          />
          <LoginButton variant="contained" className='LoginButton' type="submit">
            Iniciar Sesion
          </LoginButton>
          <a className='RegisterQ'>¿No te has registrado aún?</a>
          <RegisterButton href="http://localhost:3000/SelectRol" variant="contained" className='RegisterButton'>
            Registrate
          </RegisterButton>
        </form>
      </div>
    );
  }
}

export default Login;
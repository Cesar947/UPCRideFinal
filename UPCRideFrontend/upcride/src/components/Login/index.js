import React from 'react';
import { LoginTextField } from '../Text';
import './Login.css';
import { LoginButton, RegisterButton } from '../Buttons';
import { Redirect } from 'react-router-dom';
import { LOGIN_USUARIO } from '../../actions/actionTypes';
import { logear } from '../../actions/userActions';
import {connect} from 'react-redux'
import Logear from './logear';
import PropTypes from "prop-types";


class Login extends React.Component {

  static propTypes = {
    usuarioid: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props)
    let loggedIn = false
    let registerIn = false
    this.state = {
      username: '',
      password: '',
      usuarioid: '',
      loggedIn,
      registerIn
    }

    this.onChange = this.onChange.bind(this)
    this.login = this.login.bind(this)
    this.registrar = this.registrar.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.actionType === LOGIN_USUARIO) {
      this.setState({ usuarioid: nextProps.usuarioid });
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  registrar() {
    this.setState({
      registerIn: true
    })
  }

  login(e) {
    e.preventDefault()
    this.props.logear(this.state.username, this.state.password);
    this.setState({
      loggedIn: true
    })
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to={"/prueba/" + this.state.usuarioid} />
    }
    if (this.state.registerIn) {
      return <Redirect to="/register/select/" />
    }
    return (
      <div >
        <Logear usuarioid={this.state.usuarioid}/>
        <img src={process.env.PUBLIC_URL + 'resources/fondo.jpg'} className="Fondo" alt="logo" />
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
          <br />
          <br />
          <LoginTextField
            className='LoginTextField'
            label="ContraseÃ±a"
            value={this.state.password}
            variant="outlined"
            id="custom-css-outlined-input"
            fullWidth
            type="password"
            name='password'
            onChange={this.onChange}
          />
          <LoginButton variant="contained" className='LoginButton' onClick={this.login}>
            Iniciar Sesion
          </LoginButton>
          <a className='RegisterQ'>¿No te has registrado aun?</a>
          <RegisterButton onClick={this.registrar} variant="contained" className='RegisterButton'>
            Registrate
          </RegisterButton>
        </form>
      </div>
    );
  }
}

const mapState = state => {
  return {
      usuarioid: state.usuario.usuarioid,
      actionType: state.viaje.actionType
  }
};

const mapDispatch = {
    logear
};

export default connect(mapState, mapDispatch)(Login);
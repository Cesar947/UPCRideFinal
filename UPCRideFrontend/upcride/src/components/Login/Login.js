import React from 'react';
import { LoginTextField } from '../Text';
import './Login.css';
import { LoginButton, RegisterButton } from '../Button';



class Login extends React.Component {

  render() {
    return (
      <div >

        <img src={process.env.PUBLIC_URL + 'images/fondo.jpg'} className="Fondo" alt="logo" />
        <form className="login" noValidate>
          <LoginTextField
            className='LoginTextField'
            label="Correo UPC"
            variant="outlined"
            id="custom-css-outlined-input"
            fullWidth
          />
          <br/>
          <br/>
          <LoginTextField
            className='LoginTextField'
            label="Contraseña"
            variant="outlined"
            id="custom-css-outlined-input"
            fullWidth
            type="password"
            autoComplete="current-password"
          />
          <LoginButton variant="contained" className='LoginButton'>
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
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import '../App.css';
import Button from '@material-ui/core/Button';


const CssTextField = withStyles({
    root: {
      InputLabelProps:{
        color:"white",
      },
  
      '& label.Mui-focused': {
        color: '#96D9A6',
      },
      '& label': {
        color: 'white',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#96D9A6',
      },
  
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: '#03A6A6',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#96D9A6',
        },
      },
    },
  })(TextField);
  
  
  const ColorButton = withStyles(theme => ({
    root: {
      color: "white",
      backgroundColor: "#03A6A6",
      '&:hover': {
        backgroundColor: "#39BFA7",
      },
      '&:active': {
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
      },
      '&:focus': {
        
    },
  },
  }))(Button);
  
  const ColorButton2 = withStyles(theme => ({
    root: {
      color: "white",
      backgroundColor: "#96D9A6",
      '&:hover': {
        backgroundColor: "#39BFA7",
      },
      '&:active': {
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
      },
      '&:focus': {
        
    },
  },
  }))(Button);
  
  
  
  
  
  
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
  
  
  const Login = () => {
    const classes = useStyles();
  
    return (
      <div >
   
        <img src={process.env.PUBLIC_URL + 'images/fondo.jpg'} className="Fondo" alt="logo" />
  
  
        <form className="login" noValidate>
            <CssTextField
              className={classes.margin}
              label="Correo UPC"
              variant="outlined"
              id="custom-css-outlined-input"
              fullWidth
            />
            <CssTextField
              className={classes.margin}
              label="Contraseña"
              variant="outlined"
              id="custom-css-outlined-input"
              fullWidth
              type="password"
              autoComplete="current-password"
            />
           <ColorButton href = "http://localhost:3000/home" variant="contained" color="primary" className={classes.margin} fullWidth>
          Iniciar Sesión
        </ColorButton>
        <ColorButton2 href="http://localhost:3000/choose" variant="contained" color="primary" className={classes.margin} fullWidth>
          Registrate
        </ColorButton2>
        </form>
  
      </div>
    );
  }

  export default Login;
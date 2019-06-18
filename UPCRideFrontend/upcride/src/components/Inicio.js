import React from 'react';
import 'typeface-roboto';

import TextField from '@material-ui/core/TextField';

import UPC from './UPC.png';
import { makeStyles } from '@material-ui/styles';
import Place from '@material-ui/icons/Place';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';
import Viajes from './Viajes.js';
import Cabecera from './Cabecera.js';

const useStyles = makeStyles({
  root: {
    width: '300px',
    
  },
  iconPartida:{
   
   margin: 1,
   position: 'relative',
   left:50,
   top: 88
  },
  iconu:{
  
    height: '40px',
    position: 'relative',
    left:54,
    top: 82
  },
  
 IconFlecha:{
  position: 'relative',
  left:10,
  top: 90
 },
  
  textField: {
    marginLeft: 50,
    marginRight: 30,
    width: 150,
    position: 'relative',
    top: '50px'

  },
  FechaYHora:{
    marginLeft: 30,
    marginRight: 30,
    width: 170,
    position: 'relative',
    top: '68px'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'absolute',
    top:'130px',
    left: '80px'
  },

  EncontrarViajeTexto:{
    font: '15px roboto, sans-serif',
    fontSize: '14 solid',
     position: 'relative',
     left: '100px',
     top: '30px'
  }

});



const Inicio = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Cabecera/>
    <form className={classes.container} noValidate autoComplete="off">
    <h5 className={classes.EncontrarViajeTexto}>Encuentra tu viaje aquí:</h5>
    <Place className={classes.iconPartida}/>
      <TextField
        id="standardPartida"
        label="Punto de partida"
        className={classes.textField}
        margin="normal"
      />
      <ArrowRightAlt className={classes.IconFlecha}/>
      <img src={UPC}  alt="logo" className={classes.iconu} />
      <TextField
        id="standardDestino"
        label="Punto de destino"
        className={classes.textField}
        margin="normal"
      />
    <TextField
        id="date"
        label="Fecha del viaje"
        type="date"
        defaultValue="2017-05-24"
        className={classes.FechaYHora}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="time"
        label="Hora del viaje"
        type="time"
        defaultValue="07:30"
        className={classes.FechaYHora}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
      </form>
      <form>
        <Viajes viajes={props.storeInicio}/>
      </form>
    </div>
  )
}

export default Inicio;
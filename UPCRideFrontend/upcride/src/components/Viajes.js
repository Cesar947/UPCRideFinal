import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles({
    card: {
      width: 800,
      position: 'relative',
      top: '97px',
      marginTop: 30
    },
    
    conductor: {
      fontSize: '14 solid',
      font: '15px roboto, sans-serif',
      
    },
   
   TextoIzquierda:{
     position: 'relative',
    textAlign: 'left',
    top: '0px',
    },

    TextoDerecha:{
      position: 'relative',  
      top: '0px',
      textAlign: 'right'
    },
   Anuncio:{
    
    fontSize: 20
    },
    Boton:{
     position: 'relative',
     left: '680px'
    }
  });

const Viajes = (props) => {

const classes = useStyles();
let listaViajes = props.viajes;


return(
<div>
   { listaViajes.map(eViaje =>(
   <Card className={classes.card} key={eViaje.viajeID}>
      <CardContent>
     <Grid container>
      <Grid item xs={6} className={classes.TextoIzquierda}>
      
      <Typography className={classes.conductor} color="textSecondary" >
          Conductor: <br/>{eViaje.usuario.nombres + " " + eViaje.usuario.apellidos}
        </Typography>
      <Typography className={classes.Anuncio} variant="h5" component="h2">
         {eViaje.puntoPartida + "  " + eViaje.horaPartida}
         <br/>
         {eViaje.puntoDestino + "  " + eViaje.horaLlegada}
        </Typography>

        </Grid>

       <Grid item xs={6} className={classes.TextoIzquierda}>
       <Typography className={classes.Anuncio} variant="h5" component="h2">
         Dia: {eViaje.dia} <br/> Fecha: {eViaje.fecha}
        </Typography>
        <Typography className={classes.Anuncio} variant="h5" component="h2">
         {eViaje.descripcion}
        </Typography>
        </Grid>
        </Grid>
      </CardContent>
      
      <CardActions>
        <Button variant="contained" color="primary"  className={classes.Boton} size="small">CONSULTAR</Button>
      </CardActions>
    </Card>
    ))
}
    </div>
)


}

export default Viajes;
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
      
      marginTop: 60
    },
    
    conductor: {
      fontSize: '14 solid',
      font: '15px roboto, sans-serif',
      
    },
   
   TextoIzquierda:{
    textAlign: 'left',
    },
    TextoDerecha:{
        TextAlign: 'right'
    },
   Anuncio:{
    
    fontSize: 20
    },
    Boton:{
     position: 'relative',
     left: '680px'
    }
  });

const Viajes = () => {

const classes = useStyles();

return(

    <Card className={classes.card}>
      <CardContent>
       
       <Grid item xs={6} className={classes.TextoIzquierda}>
        <Typography className={classes.conductor} color="textSecondary" >
          Conductor:
          <br/>
          Juanelv Salgado
        </Typography>
      
        <Typography className={classes.Anuncio} variant="h5" component="h2">
          Saludos a todos. Iré desde el Metro de la Av. Venezuela hasta la UPC Monterrico.
          <br/>
          Espero poder darles un buen servicio. Los espero.
        </Typography>
        </Grid>

        <Grid item xs={6} className={classes.TextoDerecha}>

            
        </Grid>
        
      </CardContent>
      
      <CardActions>
        <Button variant="contained" color="primary"  className={classes.Boton} size="small">CONSULTAR</Button>
      </CardActions>
    </Card>


)


}

export default Viajes;
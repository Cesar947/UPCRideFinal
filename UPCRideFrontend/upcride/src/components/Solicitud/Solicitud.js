import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import 'typeface-roboto';
import NavBar from '../Home/NavBar';

import GoogleMapMarker from '../GoogleMap/GoogleMapMarker';






const classes = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        position: 'relative',
        width: "50px"
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '800px'
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
    button:{
        alignContent: 'center'
    },
    sendIcon:{
       fontSize: '18px'
    },
     TextoIzquierda:{
        position: 'relative',
         
        alignContent: 'left',

     },
    cardSolicitud: {
        padding: theme.spacing(3, 2),
        position: 'relative',
        width: "50px"
    }


}));

export default class Solicitud extends React.Component {


    constructor(props){
        super(props);
     this.state = {
      
  
    id: '',
    pasajero: '',
    viaje:'',
    mensaje:'',
    confirmacionConductor:'',
    puntoEncuentro:'',
    encuentroLatitud:'',
    encuentroLongitud:'',
    fecha:''

     }
    }

    render() {
        return (
        <div>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
            <NavBar/>
            <Grid container>

                <Grid item xs={6}>
                    <Paper
                        className={classes.root}
                    >
                        <Typography variant="h3" component="h3" gutterBottom>
                            Enviar solicitud
                </Typography>

                        <GoogleMapMarker/>

                        </Paper>
                </Grid>
        
        
        
          <Grid item xs={6}>
          <Card className={classes.cardSolicitud}>
                                <CardContent>
           <Typography component="p">
                            Viaje #1394
                          </Typography>
                        <Typography component="p">
                            Fecha del viaje: 03/08/19
                 </Typography>

                        <Typography component="p">
                            Conductor: Juanelv Salgado
                 </Typography>

                        <TextField 
                            id="outlined-textarea"
                            label="Escribe un mensaje corto"
                            placeholder="Placeholder"
                            multiline
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            value="¡Hola! Me encantaría poder formar parte de tu viaje ;)"

                        />


                      <TextField 
                            id="outlined-textarea"
                            label="Escribe el punto de encuentro"
                            placeholder="Placeholder"
                            multiline
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            value="¡Hola! Me encantaría poder formar parte de tu viaje ;)"

                        /> 
                        <Typography component="p">
                            Punto de recojo
                </Typography>

                </CardContent>
                <CardActions>

                        <Button variant="contained" color="primary" className={classes.button}>
                            Enviar solicitud
        {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
                           <i class="material-icons">send</i>
                        </Button>

    
                        </CardActions>
                 </Card>
                </Grid>
                      
                 
            </Grid>
            </div>
        );
    }
}
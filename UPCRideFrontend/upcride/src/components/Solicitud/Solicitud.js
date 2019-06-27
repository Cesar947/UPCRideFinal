import React from 'react';
import { SOLICITAR_VIAJE } from '../../actions/actionTypes';
import { solicitarViaje } from '../../actions/solicitudActions';
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
        marginLeft: 3,
        marginRight: 3,
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
       
        let posted = false
     this.state = {
    
    mensaje:'',
    puntoEncuentro:'',
    encuentroLatitud:'',
    encuentroLongitud:'',
    posted
     }
    
     this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        this.setState({ ...this.state, [fieldName]: fieldValue });
    }
    handleSubmit(){
        this.props.solicitarViaje(this.state);
        this.setState({
             posted:true
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.actionType === SOLICITAR_VIAJE) {
            this.setState({
                posted: true})
            }
        }


    render() {
       if(this.state.posted){
       // const { values, handleChange } = this.props;
           alert("La solicitud ha sido realizada");
       }
       
       
       
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
        
        
        
          <Grid item xs={6} sm={6}>
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
                            id="mensaje"
                            name="mensaje"
                            label="Escribe un mensaje corto"
                            placeholder="Placeholder"
                            multiline
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            value={this.state.mensaje}
                            onChange = {this.handleChange.bind(this)}
                        />


                      <TextField 
                             id="puntoEncuentro"
                             name="puntoEncuentro"
                            label="Punto de encuentro"
                            placeholder="Placeholder"
                            multiline
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            onChange = {this.handleChange.bind(this)}

                        /> 
                        <Typography component="p">
                            Punto de recojo
                </Typography>

                </CardContent>
                <CardActions>

                        <Button variant="contained" 
                        color="primary"
                         className={classes.button}
                         onClick={this.handleSubmit}>
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
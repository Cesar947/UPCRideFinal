import React from 'react'
import GoogleMap from '../GoogleMap/GoogleMap';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from "prop-types";
import {Redirect} from 'react-router-dom'
import {RequestButton} from '../Button/index.js';




class ViajeDetallado extends React.Component{
    

    static propTypes = {
        viajes: PropTypes.array.isRequired
    };
   
    constructor(props){
        let paraSolicitar = false;
        super(props);
        this.state={
            viajes:[],
            paraSolicitar
        }
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.viajes) {
          this.setState({ viajes: nextProps.viajes,
        })
        }
      }
 
      ALaSolicitud = () => {
         this.setState(
             {
                 paraSolicitar: true
             }
         )
      }
    render(){
   if(this.state.paraSolicitar){
     return <Redirect to="/solicitar"/>
   }
       
        return(
            <div>
                <Card >
                    <CardContent>
                        <Avatar aria-label="Recipe" className="Avatar">
                            C
                        </Avatar>
                        <Typography className="Titulo" color="textSecondary" gutterBottom>
                        Bryan Antony</Typography>
                        <Typography className="Contenido" variant="h5" component="h2">
                            {this.state.viajes.puntoPartida}</Typography>
                        <Typography variant="h5" component="h2">
                        {this.state.viajes.puntoDestino}</Typography>
                        <Typography className="Contenido" color="textSecondary" gutterBottom>
                        {this.state.viajes.descripcion}</Typography>
                        <CardActions>
                        <RequestButton onClick={this.ALaSolicitud}>SOLICITAR</RequestButton>
                       </CardActions>
  
                    </CardContent>
                    <GoogleMap  origenLongitud= {this.state.viajes.partidaLongitud}
                                origenLatitud= {this.state.viajes.partidaLatitud}
                                destinoLongitud= {this.state.viajes.destinoLongitud}
                                destinoLatitud= {this.state.viajes.destinoLatitud} />
                   
                </Card>
            </div>
        );
    }
}

export default ViajeDetallado;
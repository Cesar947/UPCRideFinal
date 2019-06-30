import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import './Trips.css';
import PropTypes from "prop-types";
import Avatar from '@material-ui/core/Avatar';
import {Redirect} from 'react-router-dom'






class ViajesList extends React.Component {

    static propTypes = {
        trips: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
        let select = false;
        this.state = {
            trips: [],
            tripid: '',
            userid: this.props.userid,
            select,
        }
        this.selectTrip = this.selectTrip.bind(this);
    }

    selectTrip(id , e){
        e.preventDefault()
        this.setState({
            select: true,
            tripid: id
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.trips) {
            this.setState({ trips: nextProps.trips })
        }
    }

    render() {
        if(this.state.select){
            return <Redirect to = {"/user/" + this.state.userid + "/trips/" + this.state.tripid} />
        }
        return (
            <div>

                <Grid>
                    {this.state.trips.map((trip, index) => (
                        <Grid key={index} xs={12} >
                            <Card >
                                <CardContent>
                                    <Grid container>
                                    <Grid item xs={6} className="TextoIzquierda">
                                    <Avatar aria-label="Recipe" className="Avatar">
                                        C
                                     </Avatar>
                                    <Typography className="Titulo" color="textSecondary" gutterBottom>
                                         {trip.conductor.nombres}</Typography>
                                    <Typography className="Contenido" variant="h5" component="h2">
                                    Desde: {trip.puntoPartida}</Typography>
                                    <Typography variant="h5" component="h2">
                                    Hasta:  {trip.puntoDestino}</Typography>
                                    <Typography className="Contenido" color="textSecondary" gutterBottom>
                                        {trip.descripcion}</Typography>  
                                </Grid>    
                                <Grid item xs={6} className="TextoDerecha">
                                <Typography className="Contenido" variant="h5" component="h2">
                                    Hora de partida: {trip.horaPartida}</Typography>
                                    <Typography variant="h5" component="h2">
                                    Hora de llegada:  {trip.horaLlegada}</Typography>
                                    </Grid>  
                                    </Grid>          
                                </CardContent>

                                <CardActions>
                                    <Button size="small" onClick={(e)=>this.selectTrip(trip.id, e)}>Ver mas</Button>
                                 
                                </CardActions>
                            </Card>
                            <br />
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    }
}

export default ViajesList;
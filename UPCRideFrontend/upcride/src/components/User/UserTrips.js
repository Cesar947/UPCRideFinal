import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import PropTypes from "prop-types";

class UserTrips extends React.Component{

    static propTypes = {
        trips: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            trips: []
        }
        this.iniciarViaje = this.iniciarViaje.bind(this)
    }

    iniciarViaje(){
        alert("Viaje Iniciado")
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.trips) {
            this.setState({ trips: nextProps.trips })
        }
    }

    render(){
        return(
            <Grid>
            {this.state.trips.map((trip, index) => (
                <Grid key={index} xs={12} >
                    <Card >
                        <CardContent>
                            <Typography className="Contenido" variant="h5" component="h2">
                                {trip.puntoPartida}</Typography>
                            <Typography variant="h5" component="h2">
                                {trip.puntoDestino}</Typography>
                            <Typography className="Contenido" color="textSecondary" gutterBottom>
                                {trip.descripcion}</Typography>
                        </CardContent>

                        <CardActions>
                            <Button size="small" onClick = {this.iniciarViaje} >Iniciar Viaje</Button>
                        </CardActions>
                    </Card>
                    <br />
                </Grid>
            ))}
        </Grid>
        );
    }
}

export default UserTrips;

import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import PropTypes from "prop-types";
import {Redirect} from 'react-router-dom';

class UserTrips extends React.Component{

    static propTypes = {
        trips: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
        let started = false;
        this.state = {
            started,
            tripid: '',
            trips: [],
            userid: this.props.userid
        }
        this.iniciarViaje = this.iniciarViaje.bind(this)
    }

    iniciarViaje(id , e){
        e.preventDefault()
        this.setState({
            started: true,
            tripid: id,
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.trips) {
            this.setState({ trips: nextProps.trips })
        }
    }

    render(){
        if(this.state.started){
            return <Redirect to={"/user/" + this.state.userid + "/" + this.state.tripid}/>
        }
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
                            <Button size="small" onClick = {(e)=>this.iniciarViaje(trip.id, e)} >Iniciar Viaje</Button>
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

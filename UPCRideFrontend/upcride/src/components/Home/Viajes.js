import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import './Home.css';
import PropTypes from "prop-types";
import { PostButton } from '../Button';
import Table from '@material-ui/core/Table';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import GoogleMap from '../GoogleMap/GoogleMap';
import {Redirect} from 'react-router-dom'






class ViajesList extends React.Component {

    static propTypes = {
        trips: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
        let rec = false
        this.state = {
            trips: [],
            rec
        }
        this.alViaje = this.alViaje.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.trips) {
            this.setState({ trips: nextProps.trips })
        }
    }

    alViaje(){
        this.setState({
            rec: true 
        })
    }

    render() {
        if(this.state.rec){
            return <Redirect to = "/viaje/detalle"/>
        }
        return (
            <div>

                <Grid>

                    {this.state.trips.map((trip, index) => (
                        <Grid key={index} xs={12} >
                            <Card >
                                <CardContent>
                                    <Avatar aria-label="Recipe" className="Avatar">
                                        C
                                     </Avatar>
                                    <Typography className="Titulo" color="textSecondary" gutterBottom>
                                        {trip.conductor.nombres}</Typography>
                                    <Typography className="Contenido" variant="h5" component="h2">
                                        {trip.puntoPartida}</Typography>
                                    <Typography variant="h5" component="h2">
                                        {trip.puntoDestino}</Typography>
                                    <Typography className="Contenido" color="textSecondary" gutterBottom>
                                        {trip.descripcion}</Typography>                  
                                </CardContent>

                                <CardActions>
                                    <Button size="small" onClick={this.alViaje}>Ver mas</Button>
                                 
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
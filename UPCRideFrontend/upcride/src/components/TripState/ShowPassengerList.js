import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import './TripState.css';
import PropTypes from "prop-types";
import Avatar from '@material-ui/core/Avatar';
import {Redirect} from 'react-router-dom'



class ShowPassengerList extends React.Component {

    static propTypes = {
        trips: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
        let select = false;
        this.state = {
            passengers: [],
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
        if (nextProps.passengers) {
            this.setState({ passengers: nextProps.passengers })
        }
    }

    render() {
        if(this.state.select){
            return <Redirect to = {"/user/" + this.state.userid + "/trips/" + this.state.tripid} />
        }
        return (
            <div>

                <Grid>
                    {this.state.passengers.map((pas, index) => (
                        <Grid key={index} xs={12} >
                            <Card >
                                <CardContent>
                                    <Avatar aria-label="Recipe" className="Avatar">
                                        C
                                     </Avatar>
                                    <Typography className="Titulo" color="textSecondary" gutterBottom>
                                        {pas.nombres}</Typography>
                                    <Typography className="Contenido" variant="h5" component="h2">
                                        {pas.solicitud.puntoEncuentro}</Typography>
                                    <Typography variant="h5" component="h2">
                                        {pas.solicitud.fecha}</Typography>              
                                </CardContent>

                                <CardActions>
                                    <Button size="small" > En el auto </Button>
                                 
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

export default ShowPassengerList;
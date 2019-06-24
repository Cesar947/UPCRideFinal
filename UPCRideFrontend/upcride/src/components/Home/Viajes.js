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



class Viajes extends React.Component {

    static propTypes = {
        trips: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            trips: []
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.trips) {
            this.setState({ trips: nextProps.trips })
        }
    }



    render() {
        return (
            <div>
                <PostButton> PUBLICAR </PostButton>
                <Card>
                    {this.state.trips.map((trip, index) => (
                        <CardContent key={index}>
                            <Typography className="Titulo" color="textSecondary" gutterBottom>
                                {trip.descripcion}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {trip.puntoPartida}
                            </Typography>
                            <Typography className="Pos" color="textSecondary">
                                {trip.puntoDestino}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {trip.estado}
                            </Typography>
                        </CardContent>
                    ))}
                    <CardActions>
                        <Button size="small">Solicitar</Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default Viajes;
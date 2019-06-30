import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import PropTypes from "prop-types";
import {Redirect} from 'react-router-dom';

class UserRequests extends React.Component{

    static propTypes = {
        trips: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            accepted: 0,
            reqid: '',
            requests: [],
            userid: this.props.userid
        }
        this.aceptarSolicitud = this.aceptarSolicitud.bind(this)
        this.rechazarSolicitud = this.rechazarSolicitud.bind(this)
    }

    aceptarSolicitud(id , e){
        e.preventDefault()
        this.setState({
            accepted: 1,
            reqid: id,
        })
    }

    rechazarSolicitud(id , e){
        e.preventDefault()
        this.setState({
            accepted: 2,
            reqid: id,
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.requests) {
            this.setState({ requests: nextProps.requests })
        }
    }

    render(){
        if(this.state.started){
            return <Redirect to={"/user/" + this.state.userid + "/" + this.state.tripid}/>
        }
        return(
            <Grid>
            {this.state.requests.map((req, index) => (
                <Grid key={index} xs={12} >
                    <Card >
                        <CardContent>
                            <Typography className="Contenido" variant="h5" component="h2">
                                {req.puntoEncuentro}</Typography>
                            <Typography variant="h5" component="h2">
                                {req.mensaje}</Typography>
                            <Typography className="Contenido" color="textSecondary" gutterBottom>
                                {req.confirmacionConductor}</Typography>
                        </CardContent>

                        <CardActions>
                            <Button size="small" onClick = {(e)=>this.aceptarSolicitud(req.id, e)} >Aceptar Solicitud</Button>
                            <Button size="small" onClick = {(e)=>this.rechazarSolicitud(req.id, e)} >Rechazar Solicitud</Button>
                        </CardActions>
                    </Card>
                    <br />
                </Grid>
            ))}
        </Grid>
        );
    }
}

export default UserRequests;
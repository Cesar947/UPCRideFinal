import React from 'react';
import { PUBLICAR_VIAJE } from '../../actions/actionTypes';
import { publicarViaje } from '../../actions/viajesActions';

import TextField from '@material-ui/core/Button';
import './Form.css';
import Button from '@material-ui/core/Button';
import { LoginTextField } from '../Text';
import Grid from '@material-ui/core/Grid';
import {connect} from "react-redux";
import './Home.css';
import {Redirect} from 'react-router-dom';




class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        let posted = false
        this.state = {
            conductor: '',
            descripcion: '',//llenar
            puntoPartida: '',//llenar
            puntoDestino: '',//llenar
            destinoLatitud: '',
            destintoLongitud: '',
            partidaLatitud: '',
            partidaLongitud: '',

horaPartida: '',
horaLlegada: '',
entrada_salida: '',
fecha: '',
dia: '',
estado: "Publicado",
visualizacionHabilitada: 1,
numeroPasajeros: 0,
limitePasajeros: '',
posted
}
}
handleChange(event) {
let fieldName = event.target.name;
let fieldValue = event.target.value;

this.setState({ ...this.state, [fieldName]: fieldValue });
}




    handleSubmit() {
        this.props.publicarViaje(this.state);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.actionType === PUBLICAR_VIAJE) {
            this.setState({
                posted: true})
            }
        }

    render() {
        if(this.state.posted){
            return <Redirect to="/home"/>
          }
        return (
            <div>
            <img src={process.env.PUBLIC_URL + '../images/card.jpg'} className="Fondo" alt="logo" />
            <div className="Form">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <LoginTextField
                            required
                            id="conductor"
                            name="conductor"
                            label="Conductor"
                            fullWidth
                            value={this.state.conductor}
                            onChange={this.handleChange.bind(this)}
                            variant="outlined"
                        />
                    </Grid>
                    <br />
                    <Grid item xs={12} sm={12}>
                        <LoginTextField
                            required
                            id="descripcion"
                            name="descripcion"
                            label="Descripcion"
                            fullWidth
                            value={this.state.descripcion}
                            onChange={this.handleChange.bind(this)}
                            variant="outlined"
                        />
                    </Grid>
                    <br />
                    <Grid item xs={12} sm={6}>
                        <LoginTextField
                            required
                            id="destinoLatitud"
                            name="destinoLatitud"
                            label="Destino Latitud"
                            fullWidth
                            value={this.state.destinoLatitud}
                            onChange={this.handleChange.bind(this)}
                            variant="outlined"
                        />
                    </Grid>
                    <br />
                    <Grid item xs={12} sm={6}>
                        <LoginTextField
                            required
                            id="destintoLongitud"
                            name="destintoLongitud"
                            label="Destino Longitud"
                            fullWidth
                            value={this.state.destintoLongitud}
                            onChange={this.handleChange.bind(this)}
                            variant="outlined"
                        />
                    </Grid>
                    <br />
                    <Grid item xs={12} sm={6}>
                        <LoginTextField
                            required
                            id="partidaLatitud"
                            name="partidaLatitud"
                            label="Partida Latitud"
                            fullWidth
                            value={this.state.partidaLatitud}
                            onChange={this.handleChange.bind(this)}
                            variant="outlined"
                        />
                    </Grid>
                    <br />
                    <Grid item xs={12} sm={6}>
                        <LoginTextField
                            required
                            id="partidaLongitud"
                            name="partidaLongitud"
                            label="Partida Longitud"
                            fullWidth
                            value={this.state.partidaLongitud}
                            onChange={this.handleChange.bind(this)}
                            variant="outlined"
                        />
                    </Grid>
                    <br />
                    <Grid item xs={12} sm={6}>
                        <LoginTextField
                            required
                            id="horaPartida"
                            name="horaPartida"
                            label="Hora Partida"
                            fullWidth
                            value={this.state.horaPartida}
                            onChange={this.handleChange.bind(this)}
                            variant="outlined"
                        />
                    </Grid>
                    <br />
                    <Grid item xs={12} sm={6}>
                        <LoginTextField
                            required
                            id="horaLlegada"
                            name="horaLlegada"
                            label="Hora Llegada"
                            fullWidth
                            value={this.state.horaLlegada}
                            onChange={this.handleChange.bind(this)}
                            variant="outlined"
                        />
                    </Grid>
                    <br />
                    <Grid item xs={12} sm={6}>
                        <LoginTextField
                            required
                            id="entrada_salida"
                            name="entrada_salida"
                            label="Entrada o Salida"
                            fullWidth
                            value={this.state.entrada_salida}
                            onChange={this.handleChange.bind(this)}
                            variant="outlined"
                        />
                    </Grid>
                    <br />
                    <Grid item xs={12} sm={6}>
                        <LoginTextField
                            required
                            id="fecha"
                            name="fecha"
                            label="Fecha"
                            fullWidth
                            value={this.state.fecha}
                            onChange={this.handleChange.bind(this)}
                            variant="outlined"
                        />
                    </Grid>
                    <br />
                    <Grid item xs={12} sm={6}>
                        <LoginTextField
                            required
                            id="dia"
                            name="dia"
                            label="Dia"
                            fullWidth
                            value={this.state.dia}
                            onChange={this.handleChange.bind(this)}
                            variant="outlined"
                        />
                    </Grid>
                    <br />
                    <Grid item xs={12} sm={6}>
                        <LoginTextField
                            required
                            id="limitePasajeros"
                            name="limitePasajeros"
                            label="Limite de Pasajeros"
                            fullWidth
                            value={this.state.limitePasajeros}
                            onChange={this.handleChange.bind(this)}
                            variant="outlined"
                        />
                    </Grid>
                    <br />
                    <Button
                        primary={true}
                        onClick={this.handleSubmit}
                    >
                        Publicar
                    </Button>
                </Grid>
            </div>
            </div>
        );
    }
}


    

const mapState = state => {
    return {
        account: state.viaje.viaje,
        actionType: state.viaje.actionType

    }
};

const mapDispatch = {
    publicarViaje
};






export default connect(mapState, mapDispatch)(PostForm);

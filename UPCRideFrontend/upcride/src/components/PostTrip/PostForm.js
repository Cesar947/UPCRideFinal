import React from 'react';
import { PUBLICAR_VIAJE } from '../../actions/actionTypes';
import { publicarViaje } from '../../actions/tripsActions';

import TextField from '@material-ui/core/Button';
import Button from '@material-ui/core/Button';
import { LoginTextField } from '../Text';
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux";
import './Viaje.css';
import PropTypes from "prop-types";


class PostForm extends React.Component {

    static propTypes = {
        usuarios: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        let numeroPasajeros =  0;
        let posted = false
        this.state = {
            usuarios: [],
            descripcion: '',//llenar
            puntoPartida: '',//llenar
            puntoDestino: '',//llenar
            destinoLatitud: '',
            destintoLongitud: '',
            partidaLatitud: '',
            partidaLongitud: '',

            horaPartida: '',
            horaLlegada: '',
            entradaSalida: '',
            fecha: '',
            dia: '',
            estado: "Publicado",
            visualizacionHabilitada: 1,
            numeroPasajeros: 0,
            limitePasajeros: 0,
            precioBase: 0.0, //lenar
            posted ,
        }
        console.log("props: ", this.props.actionType)
    }


    handleChange(event) {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;

        this.setState({ ...this.state, [fieldName]: fieldValue });
    }

    handleSubmit() {
        this.props.publicarViaje(this.state, 1);
        this.props.post()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.usuarios) {
             this.setState({ usuarios: nextProps.usuarios})
        }
        if (nextProps.actionType === PUBLICAR_VIAJE) {
            this.setState({
                posted: true
            })
        }
    }

    render() {
       
        return (
            <div>
                <div className="Form">
                    <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                            <LoginTextField
                                required
                                id="puntoPartida"
                                name="puntoPartida"
                                label="Punto Partida"
                                fullWidth
                                value={this.state.puntoPartida}
                                onChange={this.handleChange.bind(this)}
                                variant="outlined"
                            />
                        </Grid>
                        <br />
                        <Grid item xs={12} sm={6}>
                            <LoginTextField
                                required
                                id="puntoDestino"
                                name="puntoDestino"
                                label="Punto Destino"
                                fullWidth
                                value={this.state.puntoDestino}
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
                                id="entradaSalida"
                                name="entradaSalida"
                                label="Entrada o Salida"
                                fullWidth
                                value={this.state.entradaSalida}
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
                        <Grid item xs={12} sm={6}>
                            <LoginTextField
                                required
                                id="precioBase"
                                name="precioBase"
                                label="Precio Base"
                                fullWidth
                                value={this.state.precioBase}
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
        viaje: state.viaje.viaje,
        actionType: state.viaje.actionType
    }
};

const mapDispatch = {
    publicarViaje
};

export default connect(mapState, mapDispatch)(PostForm);

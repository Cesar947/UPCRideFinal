import React from 'react';
import TextField from '@material-ui/core/TextField';
import Place from '@material-ui/icons/Place';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';
import './SearchBar.css';
import Button from '@material-ui/core/Button';
import {Redirect} from 'react-router-dom';



class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    let search = false;
    this.state = {
      userid: this.props.userid,
      puntoPartida: '',
      puntoDestino: '',
      horaPartida: '',
      horaLlegada: '',
      fecha: '',
      search,
    }
  }

  handleChange(event) {
    let fieldName = event.target.name;
    let fieldValue = event.target.value;

    this.setState({ ...this.state, [fieldName]: fieldValue });
  }

  handleSubmit() {
    this.setState({
      search: true
    })
  }

  render() {

    if (this.state.search) {
      return <Redirect to={"/home/" + this.state.userid + "/search/from/" + this.state.puntoPartida + "/to/" + this.state.puntoDestino + "/at/" + this.state.horaPartida + "/and/" + this.state.horaLlegada + "/on/" + this.state.fecha} />
    }

    return (
      <div>
        <form className="Contenedor" noValidate autoComplete="off">
          <h5 className="EncontrarViajeTexto">Encuentra tu viaje aquí:</h5>
          <Place className="IconPartida" />
          <TextField
            id="puntoPartida"
            name="puntoPartida"
            label="Punto de partida"
            className="TextField"
            margin="normal"
            value={this.state.puntoPartida}
            onChange={this.handleChange.bind(this)}
          />
          <ArrowRightAlt className="IconFlecha" />
          <img src={process.env.PUBLIC_URL + '/resources/UPC.png'} alt="logo" className="Iconu" />
          <TextField
            id="puntoDestino"
            name="puntoDestino"
            label="Punto de partida"
            className="TextField"
            margin="normal"
            value={this.state.puntoDestino}
            onChange={this.handleChange.bind(this)}
          />
          <TextField
            id="fecha"
            name="fecha"
            label="Fecha"
            margin="normal"
            value={this.state.fecha}
            onChange={this.handleChange.bind(this)}
            type="date"
            defaultValue="2019-07-01"
            className="FechaYHora"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="horaPartida"
            name="horaPartida"
            label="Hora de Partida"
            type="time"
            defaultValue="07:30"
            className="FechaYHora"
            value={this.state.horaPartida}
            onChange={this.handleChange.bind(this)}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
          <TextField
            id="horaLlegada"
            name="horaLlegada"
            label="Hora de Llegada"
            type="time"
            defaultValue="09:30"
            className="FechaYHora"
            value={this.state.horaLlegada}
            onChange={this.handleChange.bind(this)}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
          <Button
            primary={true}
            onClick={this.handleSubmit}
          >
           Buscar
                    </Button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
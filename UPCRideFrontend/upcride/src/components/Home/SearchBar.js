import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import Place from '@material-ui/icons/Place';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';

  


class SearchBar extends React.Component{
    render(){
        return(
            <div>
          <form className="Contenedor" noValidate autoComplete="off">
            <h5 className="EncontrarViajeTexto">Encuentra tu viaje aquí:</h5>
            <Place className="IconPartida" />
            <TextField
              id="standardPartida"
              label="Punto de partida"
              className="TextField"
              margin="normal"
            />
            <ArrowRightAlt className="IconFlecha" />
            <img src={process.env.PUBLIC_URL + 'images/UPC.png'} alt="logo" className="Iconu" />
            <TextField
              id="standardDestino"
              label="Punto de destino"
              className="TextField"
              margin="normal"
            />
            <TextField
              id="date"
              label="Fecha del viaje"
              type="date"
              defaultValue="2017-05-24"
              className="FechaYHora"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="time"
              label="Hora del viaje"
              type="time"
              defaultValue="07:30"
              className="FechaYHora"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
          </form>
          </div>
        );
    }
}

export default SearchBar;
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { LoginTextField } from '../Text';
import Grid from '@material-ui/core/Grid';
import { REGISTRAR_CONDUCTOR } from '../../actions/actionTypes';
import { registrarConductor } from '../../actions/usuariosActions';
import {connect} from "react-redux";

export class FormDriver extends Component {
  constructor(props){
    super(props);
    let registered = false;
    this.state = {
      nombres: '', 
      apellidos: '',
      codigo:'',
      correoUPC:'', 
      contraseña:'', 
      distrito:'', 
      sede:'',
      telefono:'',
      ubicacionLatitud:'', 
      ubicacionLongitud:'',
      facebook_id:'',
      licenciaConducir: '',
      registered
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let fieldName = event.target.name;
    let fieldValue = event.target.value;
    
    this.setState({ ...this.state, [fieldName]: fieldValue });
    }
    
    
    
    
  handleSubmit() {
    this.props.registrarConductor(this.state);
    this.setState({
      registered: true})
  }
    
  componentWillReceiveProps(nextProps) {
    if (nextProps.actionType === REGISTRAR_CONDUCTOR) {
      this.setState({
       registered: true})
    }
  }

  render() {
    const { values, handleChange } = this.props;
    if(this.state.registered){
      this.props.nextStep();
    }

    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
          <LoginTextField
             required
             id="nombres"
             name="nombres"
             label="Nombres"
             fullWidth
             value={this.state.nombres}
             onChange={this.handleChange.bind(this)}
             variant="outlined"
          />
          </Grid>
          <br />
          <Grid item xs={12} sm={6}>
          <LoginTextField
            required
            id="apellidos"
            name="apellidos"
            label="Apellidos"
            fullWidth
            autoComplete="lastname"
            value={this.state.apellidos}
             onChange={this.handleChange.bind(this)}
            variant="outlined"
          />
          </Grid>
          <br />
          <Grid item xs={12} sm={12}>
          <LoginTextField
            required
            id="correoUPC"
            name="correoUPC"
            label="Correo UPC"
            fullWidth
            value={this.state.correoUPC}
            onChange={this.handleChange.bind(this)}
            variant="outlined"
          />
          </Grid>
          <br/>
          <Grid item xs={12} sm={6}>
          <LoginTextField
            required
            id="codigo"
            name="codigo"
            label="Codigo"
            fullWidth
            value={this.state.codigo}
            onChange={this.handleChange.bind(this)}
            variant="outlined"
          />
          </Grid>
          <br />
          <Grid item xs={12} sm={6}>
          <LoginTextField
            required
            id="contraseña"
            name="contraseña"
            label="Contraseña"
            fullWidth
            type="password"
            value={this.state.contraseña}
            onChange={this.handleChange.bind(this)}
            variant="outlined"
          />
          </Grid>
          <br />
          <Grid item xs={12} sm={12}>
          <LoginTextField
            required
            id="sede"
            name="sede"
            label="Sede de Estudios"
            fullWidth
            value={this.state.sede}
            onChange={this.handleChange.bind(this)}
            variant="outlined"
          />
          </Grid>
          <br />
          <Grid item xs={12} sm={6}>
          <LoginTextField
            required
            id="distrito"
            name="distrito"
            label="Distrito"
            fullWidth
            value={this.state.distrito}
            onChange={this.handleChange.bind(this)}
            variant="outlined"
          />
          </Grid>
          <br />
          <Grid item xs={12} sm={6}>
          <LoginTextField
            required
            id="telefono"
            name="telefono"
            label="Telefono"
            fullWidth
            value={this.state.telefono}
            onChange={this.handleChange.bind(this)}
            variant="outlined"
          />
          </Grid>
          <br />
          <Grid item xs={12} sm={6}>
          <LoginTextField
            required
            id="ubicacionLatitud"
            name="ubicacionLatitud"
            label="Ubicacion Latitud"
            fullWidth
            value={this.state.ubicacionLatitud}
            onChange={this.handleChange.bind(this)}
            variant="outlined"
          />
          </Grid>
          <br />
          <Grid item xs={12} sm={6}>
          <LoginTextField
            required
            id="ubicacionLongitud"
            name="ubicacionLongitud"
            label="Ubicacion Longitud"
            fullWidth
            value={this.state.ubicacionLongitud}
            onChange={this.handleChange.bind(this)}
            variant="outlined"
          />
          </Grid>
          <br />
          <Grid item xs={12} sm={6}>
          <LoginTextField
            required
            id="facebook_id"
            name="facebook_id"
            label="Facebook Id"
            fullWidth
            value={this.state.facebook_id}
            onChange={this.handleChange.bind(this)}
            variant="outlined"
          />
          </Grid>
          <br />
          <Grid item xs={12} sm={6}>
          <LoginTextField
            required
            id="licenciaConducir"
            name="licenciaConducir"
            label="Licencia Conducir"
            fullWidth
            value={this.state.licenciaConducir}
            onChange={this.handleChange.bind(this)}
            variant="outlined"
          />
          </Grid>
          <Button
            primary={true}
            style={styles.button}
            onClick={this.handleSubmit}
          >
            Continuar
          </Button>
        </Grid>
      </div>
    );
  }
}


const styles = {
  button: {
    margin: 15
  }
};

const mapState = state => {
  return {
      conductor: state.conductor,
      actionType: state.actionType

  }
};

const mapDispatch = {
  registrarConductor
};

export default connect(mapState, mapDispatch)(FormDriver);
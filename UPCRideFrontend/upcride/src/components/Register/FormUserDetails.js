import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { LoginTextField } from '../Text';
import Grid from '@material-ui/core/Grid';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
          <LoginTextField
             required
             id="Nombres"
             name="Nombres"
             label="Nombres"
             fullWidth
             autoComplete="name"
             onChange={handleChange('nombres')}
             defaultValue={values.nombres}
             variant="outlined"
          />
          </Grid>
          <br />
          <Grid item xs={12} sm={6}>
          <LoginTextField
            required
            id="Apellidos"
            name="Apellidos"
            label="Apellidos"
            fullWidth
            autoComplete="lastname"
            onChange={handleChange('apellidos')}
            defaultValue={values.apellidos}
            variant="outlined"
          />
          </Grid>
          <br />
          <Grid item xs={12} sm={12}>
          <LoginTextField
            required
            id="CorreoUPC"
            name="CorreoUPC"
            label="Correo UPC"
            fullWidth
            autoComplete="email"
            onChange={handleChange('correoupc')}
            defaultValue={values.correoupc}
            variant="outlined"
          />
          </Grid>
          <br />
          <Grid item xs={12} sm={12}>
          <LoginTextField
            required
            id="Contraseña"
            name="Contraseña"
            label="Contraseña"
            fullWidth
            autoComplete="contraseña"
            type="password"
            onChange={handleChange('contraseña')}
            defaultValue={values.contraseña}
            variant="outlined"
          />
          </Grid>
          <br />
          <Grid item xs={12} sm={6}>
          <LoginTextField
            required
            id="Sede"
            name="Sede"
            label="Sede de Estudios"
            fullWidth
            autoComplete="sedeestudios"
            onChange={handleChange('sedeestudios')}
            defaultValue={values.sedeestudios}
            variant="outlined"
          />
          </Grid>
          <br />
          <Grid item xs={12} sm={6}>
          <LoginTextField
            required
            id="Telefono"
            name="Telefono"
            label="Telefono"
            fullWidth
            autoComplete="telefono"
            onChange={handleChange('telefono')}
            defaultValue={values.telefono}
            variant="outlined"
          />
          </Grid>
          <br />
          <Button
            primary={true}
            style={styles.button}
            onClick={this.continue}
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

export default FormUserDetails;
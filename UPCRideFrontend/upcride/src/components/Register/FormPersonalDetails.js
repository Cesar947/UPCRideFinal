import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { LoginTextField } from '../Text';
import Grid from '@material-ui/core/Grid';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
          <LoginTextField
             required
             id="Licencia"
             name="Licencia"
             label="Licencia de Conducir"
             fullWidth
             autoComplete="licencia"
             onChange={handleChange('licencia')}
             defaultValue={values.licencia}
             variant="outlined"
          />
          </Grid>
          <br />
          <Grid item xs={12} sm={6}>
          <LoginTextField
            required
            id="Poliza"
            name="Poliza"
            label="Poliza de Seguro"
            fullWidth
            autoComplete="poliza"
            onChange={handleChange('poliza')}
            defaultValue={values.poliza}
            variant="outlined"
          />
          </Grid>
          <br />
          <Grid item xs={12} sm={12}>
          <LoginTextField
            required
            id="Marca"
            name="Marca"
            label="Marca"
            fullWidth
            autoComplete="marca"
            onChange={handleChange('marca')}
            defaultValue={values.marca}
            variant="outlined"
          />
          </Grid>
          <br />
          <Grid item xs={12} sm={12}>
          <LoginTextField
            required
            id="Modelo"
            name="Modelo"
            label="Modelo"
            fullWidth
            autoComplete="modelo"
            onChange={handleChange('modelo')}
            defaultValue={values.modelo}
            variant="outlined"
          />
          </Grid>
          <br />
          <Grid item xs={12} sm={6}>
          <LoginTextField
            required
            id="Capacidad"
            name="Capacidad"
            label="Capacidad de Personas"
            fullWidth
            autoComplete="capacidad"
            onChange={handleChange('capacidad')}
            defaultValue={values.capacidad}
            variant="outlined"
          />
          </Grid>
          <br />
          <Grid item xs={12} sm={6}>
          <LoginTextField
            required
            id="Placa"
            name="Placa"
            label="Placa"
            fullWidth
            autoComplete="placa"
            onChange={handleChange('placa')}
            defaultValue={values.placa}
            variant="outlined"
          />
          </Grid>
          <br />
          <Button
            primary={true}
            style={styles.button}
            onClick={this.back}
          >
            Volver
          </Button>
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

export default FormPersonalDetails;
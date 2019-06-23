import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


class CarRegister extends React.Component {
  render() {
    return (
      <div>
        <Typography variant="h6" gutterBottom>
          Registro Auto
      </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="Licencia"
              name="Licencia"
              label="Licencia de Conducir"
              fullWidth
              autoComplete="fname"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="Placa"
              name="Placa"
              label="Numero de Placa"
              fullWidth
              autoComplete="lname"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="Marca"
              name="Marca"
              label="Marca"
              fullWidth
              autoComplete="billing address-line1"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="Poliza"
              name="Poliza"
              label="Poliza de Seguro"
              fullWidth
              autoComplete="billing country"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="Modelo"
              name="Modelo"
              label="Modelo"
              fullWidth
              autoComplete="billing address-line2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="Limite"
              name="Limite"
              label="Capacidad de Personas"
              fullWidth
              autoComplete="billing address-level2"
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default CarRegister;
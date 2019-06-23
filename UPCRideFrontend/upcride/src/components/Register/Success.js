import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <Typography variant="h5" gutterBottom>
              Bienvenido a UPC Ride
                  </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography variant="subtitle1">
              Gracias por unirte a esta Comunidad
                  </Typography>
          </Grid>
          <Button
            primary={true}
            href="http://localhost:3000/home"
          >
            Ir al Home
          </Button>
        </Grid>
      </div>
    );
  }
}

export default Success;
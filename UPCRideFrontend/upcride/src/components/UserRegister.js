import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';





const UserRegister = () =>{
    return(
        <div>
            <Typography variant="h6" gutterBottom>
       Registro Usuario
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Nombres"
            name="Nombres"
            label="Nombres"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Apellidos"
            name="Apellidos"
            label="Apellidos"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Correo UPC"
            name="Correo UPC"
            label="Correo UPC"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="Contraseña"
            name="Contraseña"
            label="Contraseña"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Distrito"
            name="Distrito"
            label="Distito"
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Sede"
            name="Sede"
            label="Sede"
            fullWidth
            autoComplete="billing country"
          />
        </Grid>
      </Grid>
        </div>
    );
}

export default UserRegister;
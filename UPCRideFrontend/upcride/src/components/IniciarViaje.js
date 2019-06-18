import React from 'react';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import Cabecera from './Cabecera.js';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
const useStyles = makeStyles({
viaje:{
    fontSize: '20 bold',
    position: 'relative',
    top: 0
},
MainGrid:{
    position: 'absolute',
    top: '22%',
    left: '10%'
}
});

function IniciarViaje(){
const classes = useStyles();

return(
  
  <div>
         <Cabecera/>
        <Grid container className={classes.MainGrid}>
         <Typography className={classes.viaje} variant="h4" component="h2">
          Mis Viajes
        </Typography>
        <Card>
            <CardContent>

                
            </CardContent>
        </Card>
        </Grid>
   </div>

)
}

export default IniciarViaje;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import GMap from './GMap'
import Grid from '@material-ui/core/Grid';


import Icon from '@material-ui/core/Icon';






const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        width: "50%"
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },


}));

export default function Solicitud() {
    const classes = useStyles();

    return (
        <Grid container>

            <Grid item xs={6} className={classes.TextoIzquierda}>
                <Paper
                    className={classes.root}
                >
                    <Typography variant="h3" component="h3">
                        Enviar solicitud
                </Typography>

                    <GMap />
                    <Typography component="p">
                        Viaje #1394
                 </Typography>
                    <Typography component="p">
                        Fecha del viaje: 03/08/19
                 </Typography>

                    <Typography component="p">
                        Conductor: Juanelv Salgado
                 </Typography>

                    <TextField
                        id="outlined-textarea"
                        label="Escribe un mensaje corto"
                        placeholder="Placeholder"
                        multiline
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        value="¡Hola! Me encantaría poder formar parte de tu viaje ;)"

                    />

                    <Typography component="p">
                        Punto de recojo
                </Typography>




                    <Button variant="contained" color="primary" className={classes.button}>
                        Send
        {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
                        <Icon className={classes.rightIcon}>send</Icon>
                    </Button>



                </Paper>
        </Grid>
        </Grid>
    );
}



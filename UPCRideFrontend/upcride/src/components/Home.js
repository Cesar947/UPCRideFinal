import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import Place from '@material-ui/icons/Place';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';
import Link from '@material-ui/core/Link';


const sections = [
    'Inicio',
    'Mis viajes',
    'Mis anuncios',
    'Mis solicitudes',
    'Mi itinerario',
    'Mis reseñas'
  ];

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    position: 'absolute',
    left: '65px',
  },
  card: {
    width: "200%",
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 2,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  Appbar:{
    backgroundColor : '#0388a6',
    },
    iconPartida:{
        margin: 1,
        position: 'relative',
        left:50,
        top: 68
       },
       iconu:{
         height: '40px',
         position: 'relative',
         left:54,
         top: 62
       },
       toolbarSecondary: {
        
         position: 'absolute',
         top: '50px',
         left: '350px',
         marginBottom: '10px solid',
         borderBottom: '1px solid',
        
         border: '1px'
       },
       toolbarLink: {
         position: 'relative',
         left: 130, 
         top: '6px',
         flexShrink: 0,
         padding: 10,
        fontSize: 11,
       },
      IconFlecha:{
       position: 'relative',
       left:10,
       top: 70
      },
       Logo: {
         width: '120px',
         position: 'absolute',
         top: '20px',
         left: '20px'
       },
       textField: {
         marginLeft: 50,
         marginRight: 30,
         width: 150,
         position: 'relative',
         top: '30px'
     
       },
       FechaYHora:{
         marginLeft: 30,
         marginRight: 30,
         width: 170,
         position: 'relative',
         top: '48px'
       },
       container: {
         display: 'flex',
         flexWrap: 'wrap',
         position: 'absolute',
         top:'75px',
         left: '5px'
       },
     
       EncontrarViajeTexto:{
         font: '15px roboto, sans-serif',
         fontSize: '14 solid',
          position: 'relative',
          left: '215px',
          top: '0px'
       },
    
}));

const cards = [1, 2, 3];

const Home = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
        
      <CssBaseline />
      <AppBar position="relative" className={classes.Appbar}>
        <Toolbar>
          <img src={process.env.PUBLIC_URL + 'images/Logo.png'}  alt="logo" className={classes.Logo} />
          {sections.map(section => (
           <Link
             color="textPrimary"
             noWrap
             key={section}
             variant="body2"
             href="#"
             className={classes.toolbarLink}
           >
             <h2>{section}</h2>
           </Link>
         ))} 
        </Toolbar>
      </AppBar>
   <form className={classes.container} noValidate autoComplete="off">
   <h5 className={classes.EncontrarViajeTexto}>Encuentra tu viaje aquí:</h5>
   <Place className={classes.iconPartida}/>
     <TextField
       id="standardPartida"
       label="Punto de partida"
       className={classes.textField}
       margin="normal"
     />
     <ArrowRightAlt className={classes.IconFlecha}/>
     <img src={process.env.PUBLIC_URL + 'images/UPC.png'}  alt="logo" className={classes.iconu} />
     <TextField
       id="standardDestino"
       label="Punto de destino"
       className={classes.textField}
       margin="normal"
     />
   <TextField
       id="date"
       label="Fecha del viaje"
       type="date"
       defaultValue="2017-05-24"
       className={classes.FechaYHora}
       InputLabelProps={{
         shrink: true,
       }}
     />
     <TextField
       id="time"
       label="Hora del viaje"
       type="time"
       defaultValue="07:30"
       className={classes.FechaYHora}
       InputLabelProps={{
         shrink: true,
       }}
       inputProps={{
         step: 300, // 5 min
       }}
     />
     </form>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid spacing={4} container direction="column"  justify="center"  alignItems="center" >
            {cards.map(card => (
              <Grid item key={card} xs='6' >
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h7">
                      Conductor: 
                    </Typography>
                    <Typography>
                      Aqui va el mensaje de la publicacion
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Ver mas
                    </Button>
                    <Button size="small" color="primary" href = "http://localhost:3000/solicitud">
                      Solicitar
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      {/* End footer */}
    </React.Fragment>
  );
}

export default Home;
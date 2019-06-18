import React from 'react';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from './Logo.png';
import { makeStyles } from '@material-ui/styles';
//Secciones del Toolbar
const sections = [
    'Inicio',
    'Mis viajes',
    'Mis anuncios',
    'Mis solicitudes',
    'Mi itinerario',
    'Mis reseñas'
  ];

  const useStyles = makeStyles({
    toolbarSecondary: {
   
        position: 'absolute',
        top: '50px',
        left: '350px',
        marginBottom: '10px solid',
        borderBottom: '1px solid',
       
        border: '1px'
      },
      toolbarLink: {
        
        flexShrink: 0,
        padding: 15
      },Logo: {
        height: '10vmin',
        position: 'absolute',
        top: '25px',
        left: '35px'
      },
      TextoLogo: {
        height: '10vmin',
        position: 'absolute',
        top: '15px',
        left: '120px'
      }
  });
  
function Cabecera(){
const classes = useStyles();
return(
<div>
   
    <img src={Logo}  alt="logo" className={classes.Logo} />
    <Typography variant="title" className={classes.TextoLogo}>
         <h3>UPC Ride</h3>
    </Typography>
   <div>
   <Toolbar component="nav" variant="dense"  className={classes.toolbarSecondary}>
     
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
    </div>
    </div>
    )
    }

    export default Cabecera;
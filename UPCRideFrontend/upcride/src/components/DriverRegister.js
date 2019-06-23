import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import UserRegister from './UserRegister';
import CarRegister from './CarRegister';
import '../App.css';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    position: 'absolute',
    left:670,
    top: 20,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    width: '80%',
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    backgroundColor: "#0378a6",
    padding: theme.spacing(3, 0, 5),
    iconColor: 'green'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  title: {
    color: "#ffffff",
  }
}));

const steps = ['Registro Usuario', 'Registro Auto', 'Bienvenido'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <UserRegister />;
    case 1:
        return <CarRegister />;
    default:
      throw new Error('Unknown step');
  }
}

const DriverRegister = () =>{
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
  
    const handleNext = () => {
      setActiveStep(activeStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep(activeStep - 1);
    };
  
    return (
      <div>
        <img src={process.env.PUBLIC_URL + '/images/card.jpg'} className="Fondo" alt="logo" />
        <CssBaseline />
        <main className={classes.layout}>
            <div className={classes.paper}>
            <Typography component="h1" variant="h4" align="center" className={classes.title} >
              Registro Conductor
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length - 1  ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Bienvenido a UPC Ride
                  </Typography>
                  <Typography variant="subtitle1">
                  Gracias por unirte a esta Comunidad
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Volver
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Registrar' : 'Continuar'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
            </div>
        </main>
      </div>
    );
  }

  export default DriverRegister;
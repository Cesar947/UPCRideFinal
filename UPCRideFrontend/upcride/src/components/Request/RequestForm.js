import React from "react";
import { SOLICITAR_VIAJE } from "../../actions/actionTypes";
import { solicitarViaje } from "../../actions/tripsActions";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import NavBar from "../NavBar";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import GoogleMapMarker from "../GoogleMaps/GoogleMapMarker";

const classes = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    position: "relative",
    width: "50px"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: 3,
    marginRight: 3,
    width: "800px"
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  },
  button: {
    alignContent: "center"
  },
  sendIcon: {
    fontSize: "18px"
  },
  TextoIzquierda: {
    position: "relative",

    alignContent: "left"
  },
  cardSolicitud: {
    padding: theme.spacing(3, 2),
    position: "relative",
    width: "50px"
  }
}));

class RequestForm extends React.Component {
  static propTypes = {
    usuarios: PropTypes.array.isRequired,
    viaje: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    let posted = false;
    this.state = {
      usuarios: [],
      viajeid: this.props.viajeid,
      mensaje: "Hola! Quiero formar parte de tu viaje ;)",
      puntoEncuentro: "",
      encuentroLatitud: "",
      encuentroLongitud: "",
      confirmacionConductor: "en espera",
      fecha: "2019-07-01",
      posted
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    let fieldName = event.target.name;
    let fieldValue = event.target.value;
    this.setState({ ...this.state, [fieldName]: fieldValue });
  }

  handleSubmit() {
      
    this.props.solicitarViaje(this.state, this.state.viajeid);
    this.setState({
      posted: true
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.usuarios) {
      this.setState({ usuarios: nextProps.usuarios });
    }
    if (nextProps.actionType === SOLICITAR_VIAJE) {
      this.setState({
        posted: true
      });
    }
  }

  myCallback = (marker) => {
    //[...we will use the dataFromChild here...]
    var _markerPosition = marker.position;
    console.log(_markerPosition)
      this.setState({
          encuentroLatitud: marker.getPosition().lat(),
          encuentroLongitud: marker.getPosition().lng()
      })
    alert(this.state.encuentroLatitud + " " + this.state.encuentroLongitud)
  };

  render() {
    if (this.state.posted) {
      // const { values, handleChange } = this.props;
      alert("La solicitud ha sido realizada");
    }

    return (
      <div>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <Grid container>
          <Grid item xs={6}>
            <Paper className={classes.root}>
              <Typography variant="h3" component="h3" gutterBottom>
                Enviar solicitud
              </Typography>

              <GoogleMapMarker callbackFromParent={this.myCallback} />
            </Paper>
          </Grid>

          <Grid item xs={6} sm={6}>
            <Card className={classes.cardSolicitud}>
              <CardContent>
                <Typography component="p">
                  Viaje #{this.state.viajeid}
                </Typography>
                <Typography component="p">Fecha del viaje: 03/08/19</Typography>

                <Typography component="p">Juanelv</Typography>

                <TextField
                  id="mensaje"
                  name="mensaje"
                  label="Escribe un mensaje"
                  multiline
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  value={this.state.mensaje}
                  onChange={this.handleChange.bind(this)}
                />

                <TextField
                  id="puntoEncuentro"
                  name="puntoEncuentro"
                  label="Punto de encuentro"
                  multiline
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  value={this.state.puntoEncuentro}
                  onChange={this.handleChange.bind(this)}
                />
                <Typography component="p">Punto de recojo</Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={this.handleSubmit}
                >
                  Enviar solicitud
                  <i className="material-icons">send</i>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapState = state => {
  return {
    solicitud: state.viaje.pasajero,
    actionType: state.viaje.actionType
  };
};

const mapDispatch = {
  solicitarViaje
};

export default connect(
  mapState,
  mapDispatch
)(RequestForm);

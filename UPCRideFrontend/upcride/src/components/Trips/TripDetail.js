import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { RequestButton, ReviewButton } from "../Buttons";

class TripDetail extends React.Component {
  static propTypes = {
    viajes: PropTypes.array.isRequired
  };

  constructor(props) {
    let paraSolicitar = false;
    let paraReservar = false;
    super(props);
    this.state = {
      viajes: [],
      userid: this.props.userid,
      paraSolicitar,
      paraReservar,
      conductor: []
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.viajes) {
      this.setState({
        viajes: nextProps.viajes,
        conductor: nextProps.viajes.conductor
      });
      
    }
  }

  ALaSolicitud = () => {
    this.setState({
      paraSolicitar: true
    });
  };

  ALaReserva = () => {
    this.setState({
      paraReservar: true
    });
  };

  render() {
    if (this.state.paraSolicitar) {
      return (
        <Redirect
          to={
            "/user/" +
            this.state.userid +
            "/request/trips/" +
            this.state.viajes.id
          }
        />
      );
    }

    return (
      <div>
        <Card>
          <CardContent>
            <Avatar aria-label="Recipe" className="Avatar">
              C
            </Avatar>
            <Typography className="Titulo" color="textSecondary" gutterBottom>
              {this.state.conductor.nombres}
            </Typography>
            <Typography className="Contenido" variant="h5" component="h2">
              {this.state.viajes.puntoPartida}
            </Typography>
            <Typography variant="h5" component="h2">
              {this.state.viajes.puntoDestino}
            </Typography>
            <Typography
              className="Contenido"
              color="textSecondary"
              gutterBottom
            >
              {this.state.viajes.descripcion}
            </Typography>
            <CardActions>
              <RequestButton onClick={this.ALaSolicitud}>
                SOLICITAR
              </RequestButton>
              <ReviewButton onClick={this.ALaReserva}>RESEÑAR</ReviewButton>
            </CardActions>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default TripDetail;

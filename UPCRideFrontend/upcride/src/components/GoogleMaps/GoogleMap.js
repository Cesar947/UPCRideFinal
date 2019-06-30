import "./google.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { thisExpression } from "@babel/types";

var markers = [];
var currentMarker;

class GoogleMap extends Component {
  static propTypes = {
    viajes: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      viajes: [],
      _puntosEncuentro: [
        { location: { lat: -12.068482, lng: -77.126758 }, stopover: true }
      ]
    };
  }

  componentDidMount() {
    console.log("componentDidMountGMAP: ", this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.viajes) {
      this.setState({ viajes: nextProps.viajes });
    }

    this.renderMap(
      {
        origenLongitud: nextProps.viajes.partidaLongitud,
        origenLatitud: nextProps.viajes.partidaLatitud,
        destinoLongitud: nextProps.viajes.destintoLongitud,
        destinoLatitud: nextProps.viajes.destinoLatitud
      },
      this.state._puntosEncuentro
    );
  }

  renderMap = (cords, puntosEncuentro) => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAkSoqQ9v3nMJ9Tv60ZSwkZcgjoNkCGBsw&callback=initMap"
    );

    //convertirlo a nuestra ventana para que sea visible
    window.puntosEncuentro = puntosEncuentro;
    window.cords = cords;
    window.initMap = this.initMap;
    window.calculateAndDisplayRoute = this.calculateAndDisplayRoute;
    window.addMarker = this.addMarker;
    window.removeLastMarker = this.removeLastMarker;
    window.setMapOnAll = this.setMapOnAll;
    window.deleteMarkers = this.deleteMarkers;
  };

  initMap = () => {
    console.log("cords: ", window.cords);
    var directionsService = new window.google.maps.DirectionsService();
    var directionsDisplay = new window.google.maps.DirectionsRenderer();
    var map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: -12.077032, lng: -77.093435 },
      zoom: 16
    });

    directionsDisplay.setMap(map);

    // // This event listener calls addMarker() when the map is clicked.
    // window.google.maps.event.addListener(map, 'click', function (event) {
    //   //window.removeLastMarker(event.latLng, map);
    //   window.deleteMarkers();
    //   window.addMarker(event.latLng, map);
    // });

    window.calculateAndDisplayRoute(
      directionsService,
      directionsDisplay,
      window.cords,
      window.puntosEncuentro
    );
  };

  // Adds a marker to the map.
  addMarker = (location, map) => {
    // Add the marker at the clicked location, and add the next-available label
    // from the array of alphabetical characters.
    var marker = new window.google.maps.Marker({
      position: location,
      map: map
    });
    markers.push(marker);
  };

  removeLastMarker = (location, map) => {
    //currentMarker.setMap(null);

    currentMarker = new window.google.maps.Marker({
      position: location,
      map: null
    });
  };

  // Sets the map on all markers in the array.
  setMapOnAll = map => {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
    }
  };

  deleteMarkers = () => {
    window.setMapOnAll(null);
    markers = [];
  };

  calculateAndDisplayRoute = (
    directionsService,
    directionsDisplay,
    cords,
    puntosEncuentro
  ) => {
    var waypts = puntosEncuentro;
    console.log(" window.cords: ", window.cords);

    directionsService.route(
      {
        origin: { lat: cords.origenLatitud, lng: cords.origenLongitud },
        destination: { lat: cords.destinoLatitud, lng: cords.destinoLongitud },
        /*origin: { lat: -11.990887, lng: -77.070377 },
      destination: { lat: -12.076967, lng: -77.093636 },*/
        travelMode: "DRIVING",
        waypoints: waypts
      },
      function(response, status) {
        if (status === "OK") {
          directionsDisplay.setDirections(response);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );

    // waypts.push({
    //   location: { lat: -12.067778, lng: -77.135861 },
    //   stopover: true
    // });

    // directionsService.route({
    //   origin: { lat: this.state.origenLatitud, lng:  },
    //   destination: { lat: -12.0768117, lng: -77.0958753 },
    //   waypoints: waypts,
    //   travelMode: 'DRIVING'
    // }, function (response, status) {
    //   if (status === 'OK') {
    //     alert("todo ok")
    //     directionsDisplay.setDirections(response);
    //   } else {
    //     window.alert('Directions request failed due to ' + status);
    //   }
    // });
  };

  render() {
    return (
      <React.Fragment>
        <div id="map" />
      </React.Fragment>
    );
  }
}

function loadScript(url) {
  //con ese metodo se obtienen todas las etiquetas script mediante un arreglo.
  var index = window.document.getElementsByTagName("script")[0];
  //se crea una etiqueta script (<script></script>)
  var script = window.document.createElement("script");
  //se le aÃ±ade el src a la etiqueta
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default GoogleMap;

import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const style = {
    width: '35%',
    height: '35%',
    positions: "relative",
    left: "400px"
}


var latitud, longitud;
latitud = -12.077126;
longitud = -77.093502;



export class MapContainer extends Component {


    onMapClick(mapProps, map, clickEvent) {
        alert("click");
    
    }
    render() {
        return (
            <Map google={this.props.google}
                style={style}
                zoom={15}
                initialCenter={{
                    lat: -12.076903,
                    lng: -77.093502
                }}
                onClick={this.onMapClick}
            >
                <Marker/>


                {/* <Marker onClick={this.onMarkerClick}
                    name={'Current location'} /> */}

                <InfoWindow onClose={this.onInfoWindowClose}>
                    {/* <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div> */}
                </InfoWindow>
            </Map>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("PEGAR API KEY AQUI")
})(MapContainer)


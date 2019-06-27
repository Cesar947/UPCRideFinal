import React from 'react';

class ViajesXUsuario extends React.Component {
    constructor(props) {
        super(props) = {
            usuarios: []
        }
    }

    render() {
        return (
            <div>
                <Grid>

                    {this.state.trips.map((trip, index) => (
                        <Grid key={index} xs={12} >
                            <Card >
                                <CardContent>
                                    <Typography className="Contenido" variant="h5" component="h2">
                                        {trip.puntoPartida}</Typography>
                                    <Typography variant="h5" component="h2">
                                        {trip.puntoDestino}</Typography>
                                    <Typography className="Contenido" color="textSecondary" gutterBottom>
                                        {trip.descripcion}</Typography>
                                </CardContent>

                                <CardActions>
                                    <Button size="small">Ver mas</Button>
                                    <Button size="small">Solicitar</Button>
                                </CardActions>
                            </Card>
                            <br />
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    }
}
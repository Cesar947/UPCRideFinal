import React from 'react';
import NavBar from '../Home/NavBar';
import GoogleMap from '../GoogleMap/GoogleMap';

class Viaje extends React.Component {

    constructor(props){
        super(props)
        this.state={
            listausuarios:[]
        }
    }
    
    render() {
        return (
            <div>

            <NavBar />
                <Card >
                    <CardContent>
                        <Avatar aria-label="Recipe" className="Avatar">
                            C
                                     </Avatar>
                        <Typography className="Titulo" color="textSecondary" gutterBottom>
                            Brian</Typography>
                        <Typography className="Contenido" variant="h5" component="h2">
                            Los Olivos</Typography>
                        <Typography variant="h5" component="h2">
                            UPC San Miguel</Typography>
                        <Typography className="Contenido" color="textSecondary" gutterBottom>
                            Hola</Typography>

                    </CardContent>

                    <CardActions>
                        <Button size="small">Ver mas</Button>
                        <Button size="small">Solicitar</Button>
                    </CardActions>

                    <GoogleMap origenLongitud= {0.0}
                                origenLatitud= {0.0}
                                destinoLongitud= {0.0}
                                destinoLatitud= {0.0}/>
                </Card>
            </div>
        );
    }
}

export default Viaje;

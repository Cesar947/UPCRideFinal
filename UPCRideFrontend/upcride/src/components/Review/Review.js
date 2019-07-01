import NavBar from '../NavBar';
import React from 'react'
import { CardContent} from '@material-ui/core';
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import PropTypes from "prop-types";
import './Review.css';

class Review extends React.Component{
    static propTypes = {
        reseñas: PropTypes.array.isRequired
    };

    constructor(props){
        let reseñado = false
        super(props);
        this.state = {
            nombreConductor: '',
            apellidoConductor: '',
            contenido: '',
            calificacion: '',
            reseñado
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        this.setState({
          [e.target.name]: e.target.value
        })
      }
    render(){
        return(

            <div>
                 <NavBar/>
                 <Card>
                   <CardContent>
                      <Avatar aria-label="Recipe" className="Avatar">
                            C
                        </Avatar>
                      <Typography className="Nombre">
                            {this.state.nombreConductor + this.state.apellidoConductor}
                      </Typography>
                       <TextField
                       id="contenido"
                       label="Contenido"
                       className="TextField"
                       margin="normal"
                       variant="outlined"
                       onChange={this.onChange}>
                           <Typography>
                               {this.state.contenido}
                           </Typography>
                       </TextField>
                       <TextField
                       id="calificacion"
                       label="Calificacion"
                       className="TextField"
                       margin="normal"
                       variant="outlined"
                       onChange={this.onChange}>
                           <Typography>
                               {this.state.calificacion}
                           </Typography>
                       </TextField>
                   </CardContent>
                 </Card>

            </div>
        )
    }

}

export default Review;
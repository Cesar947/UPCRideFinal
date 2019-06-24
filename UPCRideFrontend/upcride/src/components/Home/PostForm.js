import React from 'react';
import { PUBLICAR_VIAJE } from '../../actions/actionTypes';
import { publicarViaje } from '../../actions/viajesActions';


class PostButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            conductor: '',
            descripcion: '',
            puntoPartida: '',
            puntoDestino: '',
            destinoLatitud: '',
            destintoLongitud: '',
            partidaLatitud: '',
            partidaLongitud: '',
            horaPartida: '',
            horaLlegada: '',
            entrada_salida: '',
            fecha: '',
            dia: '',
            estado: '',
            visualizacionHabilitada: '',
            numeroPasajeros: '',
            limitePasajeros: ''
        }
    }
    handleChange(event){
        let fieldName = event.target.name;
        let fieldValue = event.target.value;

        this.setState({...this.state, [fieldName]: fieldValue});
    }


    handleSubmit() {
        this.props.publicarViaje(this.state);
    }
    
    componentWillReceiveProps(nextProps) {
        if(nextProps.actionType === PUBLICAR_VIAJE){
           this.props.afterSubmit();
        }
    }

    render(){
        
    }

}
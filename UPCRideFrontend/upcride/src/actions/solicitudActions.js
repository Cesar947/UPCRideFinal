import {SOLICITAR_VIAJE} from './actionTypes';

export function solicitarViaje(solicitud){
    return function(dispatch, getState){
        fetch('http://localhost:5050/solicitudes', {
            method: 'post',
            headers:{
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(solicitud)
        }).then(response => response.json())
        .then(jsonData => {
            dispatch(setSolicitarViaje(jsonData))
        })
    }
}

export function setSolicitarViaje(dataSolicitud){
    return{
        type: SOLICITAR_VIAJE,
        dataSolicitud
    }
}
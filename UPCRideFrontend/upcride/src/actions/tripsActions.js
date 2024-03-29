import { LISTAR_VIAJES, PUBLICAR_VIAJE, VIAJES_USUARIO, ACTU_VIAJE, SELECT_VIAJE, SOLICITAR_VIAJE, SELECT_PASSENGERS, FILTRAR_VIAJES } from './actionTypes'

export function fetchViajesList() {
    return function (dispatch, getState) {

        fetch("http://localhost:5050/viajes")
            .then(response => response.json())
            .then(jsonData => {
                dispatch(setViajes(jsonData))
            })
    };
}

function setViajes(viajes) {
    return {
        type: LISTAR_VIAJES,
        viajes
    }
}

export function publicarViaje(viaje, viajeid) {

    return function (dispatch, getState) {
        fetch('http://localhost:5050/viajes/publicar/' + viajeid, {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(viaje)
        })
            .then(response => response.json())
            .then(jsonData => {
                dispatch(setGuardarViaje(jsonData))
            })

    }
}

export function setGuardarViaje(dataviaje) {
    return {
        type: PUBLICAR_VIAJE,
        dataviaje
    }
}

export function viajesByConductor(usuarioId) {

    return function (dispatch, getState) {
        fetch("http://localhost:5050/viajes/conductor/" + usuarioId)
            .then(response => response.json())
            .then(jsonData => {
                dispatch(setViajesUsuario(jsonData))
            })

    }
}

export function setViajesUsuario(viajesUsuario) {
    return {
        type: VIAJES_USUARIO,
        viajesUsuario
    }
}

export function actualizarViaje(viaje, viajeId) {

    return function (dispatch, getState) {
        fetch('http://localhost:5050/viajes/update/' + viajeId, {
            method: 'put',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(viaje)
        })
            .then(response => response.json())
            .then(jsonData => {
                dispatch(setActuViaje(jsonData))
            })

    }
}

export function setActuViaje(viaje) {
    return {
        type: ACTU_VIAJE,
        viaje
    }
}

export function selectViaje(viajeId) {

    return function (dispatch, getState) {
        fetch("http://localhost:5050/viajes/" + viajeId)
            .then(response => response.json())
            .then(jsonData => {
                dispatch(setViaje(jsonData))
            })

    }
}

export function setViaje(viaje) {
    return {
        type: SELECT_VIAJE,
        viaje
    }
}


export function solicitarViaje(solicitud, id){
    return function(dispatch, getState){
        fetch('http://localhost:5050/viajes/solicitar/' + id, {
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


export function selectTripPassengers(viajeId) {

    return function (dispatch, getState) {
        fetch("http://localhost:5050/viajes/" + viajeId + "/listaPasajeros")
            .then(response => response.json())
            .then(jsonData => {
                dispatch(setPassengers(jsonData))
            })

    }
}

export function setPassengers(pasajeros) {
    return {
        type: SELECT_PASSENGERS,
        pasajeros
    }
}


//////////////////////////////////



export function filtrarViajes(puntoPartida, puntoDestino, horaPartida, horaLlegada, fecha) {

    return function (dispatch, getState) {
        fetch("http://localhost:5050/viajes/filtros?puntoPartida=" + puntoPartida + "&puntoDestino=" + puntoDestino +"&horaPartida=" + horaPartida +"&horaLlegada=" + horaLlegada+ "&fecha=" + fecha + "&entrada_salida=0")
            .then(response => response.json())
            .then(jsonData => {
                dispatch(setFiltros(jsonData))
            })

    }
}

export function setFiltros(filtros) {
    return {
        type: FILTRAR_VIAJES,
        filtros
    }
}



import { LISTAR_VIAJES, PUBLICAR_VIAJE } from './actionTypes'

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

export function publicarViaje(viaje) {

    return function (dispatch, getState) {
        fetch('http://localhost:5050/viajes', {
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


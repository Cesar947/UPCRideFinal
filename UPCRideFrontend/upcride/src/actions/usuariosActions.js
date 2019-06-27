import { LISTAR_USUARIO, REGISTRAR_CONDUCTOR, REGISTRAR_PASAJERO } from './actionTypes'

export function registrarPasajero(pasajero) {

    return function (dispatch, getState) {
        fetch('http://localhost:5050/usuarios/pasajero', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pasajero)
        })
            .then(response => response.json())
            .then(jsonData => {
                dispatch(setGuardarPasajero(jsonData))
            })

    }
}

export function setGuardarPasajero(dataPasajero) {
    return {
        type: REGISTRAR_PASAJERO,
        dataPasajero
    }
}

export function registrarConductor(conductor) {

    return function (dispatch, getState) {
        fetch('http://localhost:5050/usuarios/conductor', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(conductor)
        })
            .then(response => response.json())
            .then(jsonData => {
                dispatch(setGuardarConductor(jsonData))
            })

    }
}

export function setGuardarConductor(dataconductor) {
    return {
        type: REGISTRAR_CONDUCTOR,
        dataconductor
    }
}

export function fetchUsuario() {
    return function (dispatch, getState) {

        fetch("http://localhost:5050/usuarios/prueba")
            .then(response => response.json())
            .then(jsonData => {
                dispatch(setUsuario(jsonData))
            })
    };
}

function setUsuario(usuarios) {
    return {
        type: LISTAR_USUARIO,
        usuarios
    }
}
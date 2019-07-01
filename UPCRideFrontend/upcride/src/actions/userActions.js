import { LISTAR_USUARIO, REGISTRAR_CONDUCTOR, REGISTRAR_PASAJERO, SOLICITUDES_USUARIO, LOGIN_USUARIO } from './actionTypes'

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

export function fetchUsuario(id) {
    return function (dispatch, getState) {

        fetch("http://localhost:5050/usuarios/" + id)
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

export function requestsByConductor(usuarioId) {

    return function (dispatch, getState) {
        fetch("http://localhost:5050/solicitudes/conductor/" + usuarioId)
            .then(response => response.json())
            .then(jsonData => {
                dispatch(setSolicitudesUsuario(jsonData))
            })

    }
}

export function setSolicitudesUsuario(solicitudesUsuario) {
    return {
        type: SOLICITUDES_USUARIO,
        solicitudesUsuario
    }
}

export function logear(correo, contraseña) {

    return function (dispatch, getState) {
        fetch("http://localhost:5050/usuarios/inicioSesion/"+ correo + "/" + contraseña)
            .then(response => response.json())
            .then(jsonData => {
                dispatch(setLogeo(jsonData))
            })

    }
}

export function setLogeo(usuarioid) {
    return {
        type: LOGIN_USUARIO,
        usuarioid
    }
}
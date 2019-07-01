import { LISTAR_USUARIO, REGISTRAR_CONDUCTOR, REGISTRAR_PASAJERO, SOLICITUDES_USUARIO, LOGIN_USUARIO } from "../actions/actionTypes";

export default function usuario(state = {}, action) {
    switch (action.type) {
        case REGISTRAR_PASAJERO:
            return Object.assign({}, state, {
                actionType: action.type,
                pasajero: action.datapasajero
            });
        case REGISTRAR_CONDUCTOR:
            return Object.assign({}, state, {
                actionType: action.type,
                conductor: action.dataconductor
            });
        case LISTAR_USUARIO:
            return Object.assign({}, state, {
                actionType: action.type,
                usuarios: action.usuarios
            });
        case SOLICITUDES_USUARIO:
            return Object.assign({}, state, {
                actionType: action.type,
                solicitudes: action.solicitudesUsuario
            });
        case LOGIN_USUARIO:
                return Object.assign({}, state, {
                    actionType: action.type,
                    usuarioid: action.usuarioid
                });
        default:
            return state;
    }
}
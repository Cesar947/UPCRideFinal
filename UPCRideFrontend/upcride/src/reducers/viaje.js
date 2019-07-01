import { LISTAR_VIAJES, PUBLICAR_VIAJE, VIAJES_USUARIO, ACTU_VIAJE, SELECT_VIAJE, SOLICITAR_VIAJE, SELECT_PASSENGERS, FILTRAR_VIAJES } from "../actions/actionTypes";

export default function viaje(state = {}, action) {
    switch (action.type) {
        case PUBLICAR_VIAJE:
            return Object.assign({}, state, {
                actionType: action.type,
                viaje: action.dataviaje
            });
        case LISTAR_VIAJES:
            return Object.assign({}, state, {
                actionType: action.type,
                viajes: action.viajes
            });
        case VIAJES_USUARIO:
            return Object.assign({}, state, {
                actionType: action.type,
                viajes: action.viajesUsuario
            });

        case ACTU_VIAJE:
            return Object.assign({}, state, {
                actionType: action.type,
                viaje: action.viaje
            });
        case SELECT_VIAJE:
            return Object.assign({}, state, {
                actionType: action.type,
                viaje: action.viaje
            });

        case SOLICITAR_VIAJE:
            return Object.assign({}, state, {
                actionType: action.type,
                solicitud: action.dataSolicitud
            });

        case SELECT_PASSENGERS:
            return Object.assign({}, state, {
                actionType: action.type,
                pasajeros: action.pasajeros
            });

        case FILTRAR_VIAJES:
            return Object.assign({}, state, {
                actionType: action.type,
                filtros: action.filtros
            });

        default:
            return state;
    }
}

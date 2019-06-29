import { LISTAR_VIAJES, PUBLICAR_VIAJE, VIAJES_USUARIO, ACTU_VIAJE , SELECT_VIAJE} from "../actions/actionTypes";

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

        default:
            return state;
    }
}
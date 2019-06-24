import {LISTAR_VIAJES, PUBLICAR_VIAJE} from "../actions/actionTypes";

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

        default:
            return state;
    }
}
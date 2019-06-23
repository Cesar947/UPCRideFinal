import {LISTAR_VIAJES} from "../actions/actionTypes";

export default function viaje(state = {}, action) {
    switch (action.type) {
        case LISTAR_VIAJES:
            return Object.assign({}, state, {
                actionType: action.type,
                viajes: action.viajes
            });

        default:
            return state;
    }
}
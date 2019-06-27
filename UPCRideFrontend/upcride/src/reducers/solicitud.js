import {SOLICITAR_VIAJE} from "../actions/actionTypes";

export default function solicitud(state = {}, action){
    switch(action.type){
        case SOLICITAR_VIAJE:
            return Object.assign({}, state, {
                actionType: action.type,
                solicitud: action.dataSolicitud
            });
        
       default:
        return state;
    }
}
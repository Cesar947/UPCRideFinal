import { RESEÑAR_CONDUCTOR} from "../actions/actionTypes";

export default function reseña(state = {}, action) {
    switch (action.type) {
        case RESEÑAR_CONDUCTOR:
            return Object.assign({}, state, {
                actionType: action.type,
                reseña: action.dataReseña
            });
        }

    }
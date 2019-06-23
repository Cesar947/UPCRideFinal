import {LISTAR_VIAJES} from './actionTypes'

export function fetchViajes() {
    return function (dispatch, getState) {

        fetch("http://localhost:5050/viajes")
            .then(response => response.json())
            .then(jsonData => {
                dispatch(setViajes(jsonData._embedded.viajes))
            })
    };
}

function setViajes(viajes) {
    return {
        type: LISTAR_VIAJES,
        viajes
    }
}
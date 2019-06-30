import { RESEÑAR_CONDUCTOR } from './actionTypes'

export function reseñarConductor(reseña, conductorId) {

    return function (dispatch, getState) {
        fetch('http://localhost:5050/reseñas/' + conductorId, {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reseña)
        })
            .then(response => response.json())
            .then(jsonData => {
                dispatch(setGuardarReseña(jsonData))
            })

    }
}

export function setGuardarReseña(dataReseña) {
    return {
        type: RESEÑAR_CONDUCTOR,
        dataReseña
    }
}
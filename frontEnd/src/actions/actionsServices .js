import { GET_OFFERERS, SEARCH, ADD_SERVICES, REMOVE_SERVICES, ADD_DEMANDES, REMOVE_DEMANDES, ADD_ZONE, REMOVE_ZONE, ADD_DISPONIBILITES, REMOVE_DISPONIBILITES } from './actionstype';
import axios from "axios"

// Get users (only offerers)
export const getUserOffers = () => dispatch => {
    axios.get('/api/users/offers')
        .then(res => dispatch({
            type: GET_OFFERERS,
            payload: res.data
        })
        )
        .catch(err => console.log(err))
}




// @ SERVICE
export const addServices = (newServices) => dispatch =>{
    dispatch({
        type: ADD_SERVICES,
        payload: newServices,
    })
}

export const removeService = (id) => {
    return {
        type: REMOVE_SERVICES,
        payload: id
    }
}

// @ DEMANDES
export const addDemandes = (newDemandes) => {
    return {
        type: ADD_DEMANDES,
        payload: newDemandes,
    }
}

export const removeDemandes = (id) => {
    return {
        type: REMOVE_DEMANDES,
        payload: id
    }
}

//  @ ZONE
export const addZoneDintervention = (newDemandes) => {
    return {
        type: ADD_ZONE,
        payload: newDemandes,
    }
}

export const removeZoneDintervention = (id) => {
    return {
        type: REMOVE_ZONE,
        payload: id
    }
}

//  @ DISPONIBILITES
export const addDisponibilites = (newDisponibilites) => {
    return {
        type: ADD_DISPONIBILITES,
        payload: newDisponibilites,
    }
}

export const removeDisponibilites = (id) => {
    return {
        type: REMOVE_DISPONIBILITES,
        payload: id
    }
}

// @serch 
export const search = (filter) => {
    return {
        type: SEARCH,
        payload: filter
    }
}



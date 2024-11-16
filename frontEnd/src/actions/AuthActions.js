import { EDIT_SERVICE, EDIT_PROFIL, USER_LOADED, REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, AUTH_ERROR, CLEAR_ERROR, LOGOUT } from './actionstype';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

// Load User
export const loadUser = () => dispatch => {
    // Set the token inside request's header
    if (localStorage.token) {
        setAuthToken(localStorage.token)
    }

    axios.get('/api/auth/Login')
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        })
        )
        .catch(err => dispatch({
            type: AUTH_ERROR,
        })
        )
}

// Register User
export const register = formData => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios.post('/api/users/register', formData, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
            dispatch(loadUser())
        })
        .catch(err => dispatch({
            type: REGISTER_FAIL,
            payload: err
        }))
}

// Login User
export const login = formData => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios.post('/api/auth/Login', formData, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
            dispatch(loadUser())
        })
        .catch(err => dispatch({
            type: LOGIN_FAIL,
            payload: err.data  
        }))
}


// Logout User
export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    })
}

// Clear Errors
export const clearError = () => dispatch => {
    dispatch({
        type: CLEAR_ERROR
    })
}


// Edit Profil
export const editProfil = newInfo => dispatch => {
    axios.put(`/api/users/${newInfo._id}`, newInfo)
        .then(res => dispatch({
            type: EDIT_PROFIL,
            payload: res.data
        }))
        .catch(err => console.error(err.message))
}
// Edit Services
export const editServices = (oneService) => dispatch => {
    axios.put(`/api/users/services/${oneService._id}`, oneService)
        .then(res => dispatch({
            type: EDIT_SERVICE,
            payload: res.data
        }))
        .catch(err => console.error(err.message))
}
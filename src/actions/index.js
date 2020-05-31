import ActionTypes from "./ActionTypes"
import { LOGIN_URL } from "../config/ServiceUrl";
import Axios from 'axios';

export const userLogin = (userData) => {
    return {
        type: ActionTypes.USER_LOGIN,
        userData: userData
    }
}

export const requestPosts = () => ({
    type: ActionTypes.REQUEST_POSTS,
});

export const getError = (error) => ({
    type: ActionTypes.GET_ERROR,
    error: error
});

export const getProducts = (productsData) => {
    return {
        type: ActionTypes.GET_PRODUCTS,
        productsData: productsData
    }
}

export const getFilters = (filtersData) => {
    return {
        type: ActionTypes.GET_FILTERS,
        filtersData: filtersData
    }
}

export const userLoginService = (username, password) => {
    return (dispatch) => {
        return Axios.get(`${LOGIN_URL}?username=${username}&password=${password}`)
            .then(response => {
                dispatch(userLogin(response.data))
            })
            .catch(err => {
                dispatch(getError(err));
            })
    }
}
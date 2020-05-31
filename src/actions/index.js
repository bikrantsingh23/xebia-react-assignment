import ActionTypes from "./ActionTypes"
import { LOGIN_URL, FILTERS_URL, PRODUCTS_URL } from "../config/ServiceUrl";
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

export const getProducts = (productList) => {
    return {
        type: ActionTypes.GET_PRODUCTS,
        productList: productList
    }
}

export const getFilters = (filtersData) => {
    return {
        type: ActionTypes.GET_FILTERS,
        filtersData: filtersData
    }
}

export function addToCart(cartItems) {
    return {
        type: ActionTypes.ADD_TO_CART,
        cartItems: cartItems
    };
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

export const callFilterService = () => {
    return (dispatch) => {
        return Axios.get(FILTERS_URL)
            .then(response => {
                dispatch(getFilters(response.data))
            })
            .catch(err => {
                dispatch(getError(err));
            })
    }
}

export const callProductService = (title) => {
    const URL = title !== "" ? `${PRODUCTS_URL}?title=${title}` : PRODUCTS_URL;
    return (dispatch) => {
        dispatch(requestPosts());
        return Axios.get(URL)
            .then(response => {
                dispatch(getProducts(response.data))
            })
            .catch(err => {
                dispatch(getError(err));
            })
    }
}
import ActionTypes from "../actions/ActionTypes";

const INITIAL_STATE = { productList: [], filtersData: [], isLoading: false, errMsg: '', cartItems: "" };

export default function productReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ActionTypes.GET_PRODUCTS:
            return {
                ...state,
                productList: action.productList,
                isLoading: false,
                errMsg: ''
            };
        case ActionTypes.REQUEST_POSTS:
            return {
                ...state,
                isLoading: true
            };
        case ActionTypes.GET_ERROR:
            return {
                ...state,
                errMsg: action.error,
                isLoading: false,
            };
        case ActionTypes.GET_FILTERS:
            return {
                ...state,
                filtersData: action.filtersData,
                errMsg: ''
            };
        case ActionTypes.ADD_TO_CART:
            return {
                ...state,
                cartItems: action.cartItems,
            };
        default:
            return state;
    }
}
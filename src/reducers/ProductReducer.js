import ActionTypes from "../actions/ActionTypes";

const INITIAL_STATE = {
    productList: [],
    filtersData: [],
    isLoading: false,
    errMsg: '',
    cartItems: "",
    minDiscount: [
        { key: 'Min', value: 'Min' },
        { key: '0', value: '0' },
        { key: '10', value: '10' },
        { key: '20', value: '20' },
        { key: '30', value: '30' },
        { key: '40', value: '40' },
        { key: '50', value: '50' },
        { key: '60', value: '60' },
        { key: '70', value: '70' },
        { key: '80', value: '80' },
        { key: '90', value: '90' }
    ],
    maxDiscount: [
        { key: 'Max', value: 'Max' },
        { key: '0', value: '0' },
        { key: '10', value: '10' },
        { key: '20', value: '20' },
        { key: '30', value: '30' },
        { key: '40', value: '40' },
        { key: '50', value: '50' },
        { key: '60', value: '60' },
        { key: '70', value: '70' },
        { key: '80', value: '80' },
        { key: '90', value: '90' },
        { key: '100', value: '100' }
    ]
};

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
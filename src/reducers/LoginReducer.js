import ActionTypes from "../actions/ActionTypes";

const INITIAL_STATE = { userData: [], errMsg: '' };

export default function loginReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ActionTypes.USER_LOGIN:
            return {
                ...state,
                userData: action.userData,
                errMsg: ''
            };
        case ActionTypes.GET_ERROR:
            return {
                ...state,
                errMsg: action.error
            };
        default:
            return state;
    }
}
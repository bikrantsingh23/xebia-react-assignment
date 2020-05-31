import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import ProductReducer from "./ProductReducer";

export default combineReducers({
    loginReducer: LoginReducer,
    productReducer: ProductReducer
})
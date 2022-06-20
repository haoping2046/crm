import {combineReducers} from "redux";
import {ordersReducer} from "./orders.reducer";

export const rootReducer = combineReducers({
    orders: ordersReducer,
})
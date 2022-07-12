import {combineReducers} from "redux";
import {ordersReducer} from "./orders.reducer";
import {authReducer} from "./auth.reducer";
import {usersReducer} from "./users.reducer";
import {customersReducer} from "./customers.reducer";

export const rootReducer = combineReducers({
    orders: ordersReducer,
    user: authReducer,
    userData: usersReducer,
    customers: customersReducer,
})
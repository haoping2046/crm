import {combineReducers} from "redux";
import {ordersReducer} from "./orders.reducer";
import {authReducer} from "./auth.reducer";
import {usersReducer} from "./users.reducer";
import {customersReducer} from "./customers.reducer";

export const rootReducer = combineReducers({
    orders: ordersReducer,
    auth: authReducer,
    user: usersReducer,
    customers: customersReducer,
})
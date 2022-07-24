import {OrderModel} from "../models/order.model";
import {CustomerModel} from "../models/customer.model";
import {UserModel} from "../models/user.model";

export const appConstants = {
    orderRoute: "/orders",
    editOrderRoute: "/editOrderRoute",
    loginRoute: "/login",
    logoutRoute: "/logout",
    userRoute: "/users",
    addUserRoute: "/add-user",
    homeRoute: "/home",
    customerRoute: "/customers",
    addOrderRoute: "/add-order",

    // TODO: delete
    testRoute: "/test",

    GET_ORDER: 'GET_ORDER',
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    CHECK_LOGIN: 'CHECK_LOGIN',
    GET_USER: 'GET_USER',
    ADD_USER: 'ADD_USER',
    GET_CUSTOMER: 'GET_CUSTOMER',
    DELETE_ORDER: 'DELETE_ORDER',

    AUTHENTICATE_THE_USER: "AUTHENTICATE_THE_USER",

    admin: 'admin',
    salesLeader: 'sales leader',
    seniorSale: 'senior sale',
}

export interface ReduxState {
    orders: OrderModel [];
    customers: CustomerModel [];
    user: UserModel [];
    auth: UserModel;
}


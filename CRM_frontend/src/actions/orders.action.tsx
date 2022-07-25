import {appConstants} from "../constants/constants";
import axios from 'axios';
import {OrderModel} from "../models/order.model";

export const getOrders = (
) => {
    const getProductsPromise = axios.get(
        `${process.env.REACT_APP_API}/orders`,

    );

    return {
        type: appConstants.GET_ORDER,
        payload: getProductsPromise
    }
}

export const getPersonalOrders = (
    userId: number
) => {
    const getProductsPromise = axios.get(
        `${process.env.REACT_APP_API}/orders/userId=${userId}`,

    );

    return {
        type: appConstants.GET_ORDER,
        payload: getProductsPromise
    }
}

export const deleteOrder = (
    id: number,
    succeed: () => void,
    fail: (msg: string) => void
) => {
    axios.delete(
        `${process.env.REACT_APP_API}/orders/${id}`
    );
    return {
        type: appConstants.DELETE_ORDER,
        payload: id
    }
}

export const addOrder = (
    order: {
        title: string,
        orderCustomer: {customer: {name: string, company: string, phone: string}},
        purchases: {product: {name: string}}[],
        purchase_date: string,
        approval_status: string,
        discount: number,
        orderUser: {user: {name: string}}
    },
    succeed: () => void,
    fail: (msg: string) => void
) => {
    const addOrderPromise = axios.post(
        `${process.env.REACT_APP_API}/orders`,
        order,
        {
            withCredentials: true
        }
    )
    addOrderPromise
        .then(res => {
            res.data.success ? succeed() : fail(res.data.message)
        })
        .catch(err => fail(err.message))

    return {
        type: appConstants.ADD_ORDER,
        payload: addOrderPromise
    }
}

import {appConstants} from "../constants/constants";
import axios from 'axios';

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


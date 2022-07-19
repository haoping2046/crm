import {appConstants} from "../constants/constants";
import axios from 'axios';

export const getOrders = (
    // user: {email: string, password: string, profiles: {id: string, type: string}[]},
) => {
    const getProductsPromise = axios.get(
        `${process.env.REACT_APP_API}/orders`,

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


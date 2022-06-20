import {appConstants} from "../constants/constants";
import axios from 'axios';

export const getOrders = () => {
    const getProductsPromise = axios.get(
        'http://localhost:8080/orders'
    );

    return {
        type: appConstants.GET_ORDER,
        payload: getProductsPromise
    }
}
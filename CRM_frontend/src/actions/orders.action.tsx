import {appConstants} from "../constants/constants";
import axios from 'axios';

export const getOrders = () => {
    const getProductsPromise = axios.get(
        `${process.env.REACT_APP_API}/orders`
    );

    return {
        type: appConstants.GET_ORDER,
        payload: getProductsPromise
    }
}
import axios from "axios";
import {appConstants} from "../constants/constants";

export const getCustomers = () => {
    const getCustomersPromise = axios.get(
        `${process.env.REACT_APP_API}/customers`,
    )
    return {
        type: appConstants.GET_CUSTOMER,
        payload: getCustomersPromise
    }
}
import {appConstants} from "../constants/constants";
import axios from 'axios';
import qs from 'qs';

// TODO learn fetch out
export const login = (user: { email: string, password: string }) => {
    const loginPromise = axios.post(
        'http://localhost:8080/login',
        qs.stringify(user));
    return {
        type: appConstants.LOGIN,
        payload: loginPromise
    }
};

export const checkLogin = () => {
    const checkLoginPromise = axios.get(
        'http://localhost:8080/checklogin',
        {withCredentials: true}
    );
    return {
        type: appConstants.CHECK_LOGIN,
        payload: checkLoginPromise
    }
}
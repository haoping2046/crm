import {appConstants} from "../constants/constants";
import axios from 'axios';
import qs from 'qs';

export const login = (
    user: { email: string, password: string },
    succeed: () => void,
    fail: (msg: string) => void
) => {
    const loginPromise = axios.post(
        // process.env.REACT_APP_API +'/login',
        `${process.env.REACT_APP_API}/login`,
        qs.stringify(user),
        {withCredentials: true}  // carry cookie/set cookie
    );

    loginPromise
        .then(res => {
            // res.data.success ? succeed() : fail(res.data.message);
            if (res.data.success) {
                localStorage.setItem('token', JSON.stringify(res.data)); // Save token in localStorage
                succeed();
            } else {
                fail(res.data.message);
            }
        })
        .catch(err => fail(err.message))

    return {
        type: appConstants.LOGIN,
        payload: loginPromise
    }
};

export const checkLogin = (
    succeed: () => void,
    fail: (msg: string) => void
) => {

    const checkLoginPromise = axios.get(
        `${process.env.REACT_APP_API}/checklogin`,
        {withCredentials: true}
    );

    checkLoginPromise
        .then(res => {
            res.data.success ? succeed() : fail(res.data.message);
        })
        .catch(err => fail(err.message))

    return {
        type: appConstants.CHECK_LOGIN,
        payload: checkLoginPromise
    }

}

export const logout = (
    succeed: () => void,
    fail: (msg: string) => void
) => {
    const loginPromise = axios.get(
        `${process.env.REACT_APP_API}/logout`,
        {withCredentials: true}
    ).then(res => {
        // res.data.success ? succeed() : fail(res.data.message);
        if (res.data.success) {
            localStorage.removeItem('token');  // Remove token in localStorage
            succeed();
        } else {
            fail(res.data.message)
        }
    }).catch(err => fail(err.message));

    return {
        type: appConstants.LOGOUT,
        payload: loginPromise
    }
}


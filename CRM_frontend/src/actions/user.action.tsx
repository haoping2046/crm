import {appConstants} from "../constants/constants";
import axios from "axios";

export const getUsers = () => {
    const getUsersPromise = axios.get(
        `${process.env.REACT_APP_API}/users`,
    )
    return {
        type: appConstants.GET_USER,
        payload: getUsersPromise
    }
}

export const addUser = (
    user: {email: string, password: string, profiles: {id: string, type: string}[]},
    succeed: () => void,
    fail: (msg: string) => void
) => {
    const addUsersPromise = axios.post(
        `${process.env.REACT_APP_API}/users`,
        user,

        {
            withCredentials: true
        }
    );

    addUsersPromise
        .then(res => {
            res.data.success ? succeed() : fail(res.data.message)
        })
        .catch(err => fail(err.message))

    return {
        type: appConstants.ADD_USER,
        payload: addUsersPromise
    }
}
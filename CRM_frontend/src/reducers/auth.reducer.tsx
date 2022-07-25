import {appConstants} from "../constants/constants";
import {AxiosResponse} from "axios";
import {UserModel} from "../models/user.model";


export const authReducer = (state: UserModel | null = null, action: authReducerAction) => {
    switch (action.type) {
        case appConstants.LOGIN:
            console.log((action.payload as AxiosResponse).data.user)
            return action.payload.data.success ?  (action.payload as AxiosResponse).data.user : null;
        case appConstants.CHECK_LOGIN:
            console.log((action.payload as AxiosResponse).data.user)
            return action.payload.data.success ? action.payload.data.user: null;
        case appConstants.LOGOUT:
            return null;
        default:
            return state;
    }
}

interface  authReducerAction {
    type: string;
    payload: any;
}
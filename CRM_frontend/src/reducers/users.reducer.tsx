import {UserModel} from "../models/user.model";
import {AxiosResponse} from "axios";
import {appConstants} from "../constants/constants";

export const usersReducer = (state: UserModel[] | null = null, action: userReducerAction) => {
    switch(action.type) {
        case appConstants.GET_USER:
            return (action.payload as AxiosResponse).data;
        case appConstants.ADD_USER:
            return action.payload.data.success ? state : null;
        default:
            return state
    }
}

interface userReducerAction {
    type: string;
    payload: AxiosResponse;
}
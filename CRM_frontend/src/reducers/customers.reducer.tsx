
import {AxiosResponse} from "axios";
import {appConstants} from "../constants/constants";
import {CustomerModel} from "../models/customer.model";

export const customersReducer = (state: CustomerModel[] | null = null, action: customerReducerAction) => {
    switch(action.type) {
        case appConstants.GET_CUSTOMER:
            return (action.payload as AxiosResponse).data;
        default:
            return state
    }
}

interface customerReducerAction {
    type: string;
    payload: AxiosResponse;
}
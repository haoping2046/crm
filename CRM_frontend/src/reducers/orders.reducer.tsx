import {appConstants} from "../constants/constants";
import {OrderModel} from "../models/order.model";
import {AxiosResponse} from "axios";

export const ordersReducer = (state: OrderModel [] | null = null, action: ordersReducerAction) => {
    switch(action.type) {
        case appConstants.GET_ORDER:
            console.log((action.payload as AxiosResponse).data);
            return (action.payload as AxiosResponse).data;
        default:
            return state
    }
}

interface ordersReducerAction {
    type: string;
    payload: AxiosResponse;  // | OrderModel
}
import {appConstants} from "../constants/constants";
import {OrderModel} from "../models/order.model";
import {AxiosResponse} from "axios";

export const ordersReducer = (state: OrderModel [] | null = null, action: ordersReducerAction) => {
    switch(action.type) {
        case appConstants.GET_ORDER:
            return (action.payload as AxiosResponse).data;
        case appConstants.DELETE_ORDER:
            const nextState = state ? [...state] : [];
            return nextState.filter((o) => o.id !== action.payload as number);
        default:
            return state
    }
}

interface ordersReducerAction {
    type: string;
    payload: AxiosResponse | number;// | OrderModel;

}
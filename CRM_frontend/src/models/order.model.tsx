import {OrderUserModel} from "./user.model";
import {OrderCustomerModel} from "./customer.model";

export interface OrderModel {
    id: number;
    title: string;
    orderCustomer: OrderCustomerModel;
    orderUser: OrderUserModel;
    purchase_date: string;
    approval_status: string;
    discount: number;
    purchases: PurchaseModel [];
}

export interface PurchaseModel {
    id: number;
    product: ProductModel;
    qty: number
}

export interface ProductModel {
    id: number;
    name: string;
    price: number
}


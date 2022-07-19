import {UserModel} from "./user.model";
import {CustomerModel} from "./customer.model";

export interface OrderModel {
    id: number;
    title: string;
    customer: CustomerModel;
    user: UserModel;
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

export interface ReduxState {
    orders: OrderModel [];
    // userData: UserModel;
    user: {email: string};
}
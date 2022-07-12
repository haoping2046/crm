export interface OrderModel {
    id?: number;
    title: string;
    customer_id: number;
    product_id: number;
    user_id: number;
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
    user: {email: string};
}
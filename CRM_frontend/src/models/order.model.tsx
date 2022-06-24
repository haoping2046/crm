export interface OrderModel {
    id?: number;
    customer_id: number;
    product_id: number;
    user_id: number;
    purchase_date: string;
    approval_status: string;
    discount: number;
}

export interface ReduxState {
    orders: OrderModel [];
    user: {email: string};
}
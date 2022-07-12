export interface CustomerModel {
    id: number;
    name: string;
    company: string;
    phone: string;
}

export interface ReduxState {
    customers: CustomerModel [];
}
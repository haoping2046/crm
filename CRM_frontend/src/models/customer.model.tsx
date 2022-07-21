export interface OrderCustomerModel {
    customer: CustomerModel
}

export interface CustomerModel {
    id: number;
    name: string;
    company: string;
    phone: string;
}


export interface OrderUserModel {
    user: UserModel;
}

export interface UserModel {
    id: number;
    email: string;
    password: string;
    name: string;
    profiles: ProfileModel [];
    enabled: string;
}

export interface ProfileModel {
    id: number;
    type: string;
}

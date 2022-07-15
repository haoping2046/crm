export interface UserModel {
    id: number;
    email: string;
    password: string;
    profiles: ProfileModel [];
    enabled: string;
}

export interface ProfileModel {
    id: number;
    type: string;
}

export interface ReduxState {
    userData: UserModel [];
    user: {username: string};
}
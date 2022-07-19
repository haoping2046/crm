import {appConstants} from "../constants/constants";


export const authReducer = (state: {username: string} | null = null, action: authReducerAction) => {
    switch (action.type) {
        case appConstants.LOGIN:
            // return action.payload.data.success ? action.payload.data.user : null;
            return action.payload.data.success ? {email: 'admin@devote.com'}: null;
        case appConstants.CHECK_LOGIN:
            console.log(action.payload.data.user)
            return action.payload.data.success ? action.payload.data.user: null;

                // return action.payload.data.success ? {email: 'admin@devote.com'}: null;
        case appConstants.LOGOUT:
            // return action.payload.data.success ? action.payload.data.user : null;
            return null;
        default:
            return state;
    }
}

interface  authReducerAction {
    type: string;
    payload: any;
}
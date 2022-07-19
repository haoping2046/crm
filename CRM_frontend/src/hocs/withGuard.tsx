import {useSelector} from "react-redux";
import {useEffect} from "react";
import {appConstants} from "../constants/constants";
import {ReduxState} from "../models/user.model";

export const withGuard = (OldComponent: any) => {
    const HigherOrderComponent = (props: any) => {

        const user = useSelector((state: ReduxState) => state.userData);
        const token = localStorage.getItem('token');

        useEffect(() => {
            !token && !user && props.history.push(appConstants.loginRoute)
        }, [token, user, props.history]);

        return user ?
            <OldComponent/> :
            <h4>No access</h4>
    };
    return HigherOrderComponent;
}


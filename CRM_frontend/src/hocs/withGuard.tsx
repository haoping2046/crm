import {useSelector} from "react-redux";
import {useEffect} from "react";
import {ReduxState, appConstants} from "../constants/constants";

export const withGuard = (OldComponent: any) => {
    const HigherOrderComponent = (props: any) => {

        const auth = useSelector((state: ReduxState) => state.auth);
        const token = localStorage.getItem('token');
        console.log(!token, !auth);
        useEffect(() => {
            !token && !auth && props.history.push(appConstants.loginRoute)
        }, [token, auth, props.history]);

        return auth ?
            <OldComponent/> :
            <h4>No access</h4>
    };
    return HigherOrderComponent;
}


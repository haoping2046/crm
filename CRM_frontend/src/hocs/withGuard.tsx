import {useSelector} from "react-redux";
import {useEffect} from "react";
import {appConstants} from "../constants/constants";
import {ReduxState} from "../models/order.model";

export const withGuard = (OldComponent: any) => {
    const HigherOrderComponent = (props: any) => {

        const user = useSelector((state: ReduxState) => state.user);
        console.log(user)
        useEffect(() => {
            console.log(user)
            !user && props.history.push(appConstants.loginRoute)
            // return() => {}  componentWillUnmount
        }, [user, props.history]);

        return user ?
            <OldComponent/> :
            <h4>No access</h4>
    };
    return HigherOrderComponent;
}


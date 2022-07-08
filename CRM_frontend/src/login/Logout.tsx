import React, {SyntheticEvent} from 'react';
import {useDispatch} from "react-redux";
import {logout} from "../actions/auth.action";
import {RouteComponentProps} from "react-router-dom";
import {appConstants} from "../constants/constants";

const Logout = (props: LogoutProps) => {
    const dispatch = useDispatch();

    const clickHandler = (event: SyntheticEvent) => {
        event.preventDefault();
        dispatch(logout(
            () => {props.history.goBack()},
            (msg: string) => console.log(msg)
        ))
    }
    return (
        <>
            <h1>Do you want to logout?</h1>
            <button className="btn btn-success" onClick={clickHandler}>Logout</button>
        </>
    );
}

export default Logout;

interface LogoutProps extends RouteComponentProps {

}
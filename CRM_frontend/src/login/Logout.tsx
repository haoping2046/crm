import React, {SyntheticEvent} from 'react';
import {useDispatch} from "react-redux";
import {logout} from "../actions/auth.action";
import {RouteComponentProps} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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
            <Typography variant="h4" gutterBottom>
                Do you want to logout?
            </Typography>
            <Button variant="contained" color="primary" onClick={clickHandler}>LOGOUT</Button>
        </>
    );
}

export default Logout;

interface LogoutProps extends RouteComponentProps {

}
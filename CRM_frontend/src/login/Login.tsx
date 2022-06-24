import React, {SyntheticEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import {appConstants} from "../constants/constants";
import {login} from "../actions/auth.action";
import {RouteComponentProps} from "react-router-dom";

const Login = () => {
    // useState hook
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    // useDispatch from react-redux
    const dispatch = useDispatch();

    const updateHandler = (event: SyntheticEvent) => {
        const ele = event.target as HTMLInputElement;
        setUser({...user, [ele.id]: ele.value});
    };

    const submitHandler = (event: SyntheticEvent) => {
        event.preventDefault();
        console.log(user);
        dispatch(login(user));
        // dispatch(login(
        //     user,
        //     () => props.history.push(appConstants.productRoute),
        //     (msg: string) => console.log(msg)
        // ))
    }

    return (
        <>
            <form className="for-group" onSubmit={submitHandler}>
                <input onChange={updateHandler} value={user.email} id="email" className="form-control" type="text" />
                <input onChange={updateHandler} value={user.password} id="password" className="form-control" type="password"/>
                <button className="btn btn-success">Login</button>
            </form>
        </>
    );
}

export default Login;

interface LoginProps extends RouteComponentProps {

}
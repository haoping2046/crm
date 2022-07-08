import React, {SyntheticEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import {login} from "../actions/auth.action";
import {RouteComponentProps} from "react-router-dom";
import css from './Login.module.scss';

const Login = (props: LoginProps) => {
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
        dispatch(login(
            user,
            () => props.history.goBack(),
            // () => props.history.push(appConstants.orderRoute),
            (msg: string) => console.log(msg)
        ));
    }
    // for-group
    return (
        <>
            <form className={css.Login} onSubmit={submitHandler}>
                <label htmlFor="email">Email:</label>
                <input onChange={updateHandler} value={user.email} id="email" className="form-control" type="email" />

                <label htmlFor="password">Password:</label>
                <input onChange={updateHandler} value={user.password} id="password" className="form-control" type="password"/>

                <button className="btn btn-success">Login</button>
            </form>
        </>
    );
}

export default Login;

interface LoginProps extends RouteComponentProps {

}
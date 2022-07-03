import {RouteComponentProps} from "react-router-dom";
import React, {SyntheticEvent, useState} from 'react';
import {Field, Form, Formik} from "formik";
import css from "./AddUser.module.scss";
import {addUser} from "../actions/user.action";
import {appConstants} from "../constants/constants";
import {useDispatch} from "react-redux";


const AddUser = (props: AddUserProps) => {
    const [user, setUser] = useState({
        email: '',
        password: '',
        profiles: [{id: '', type: ''}],

    })
    const dispatch = useDispatch();

    const submitHandler = (event: SyntheticEvent) => {
        event.preventDefault();
        dispatch(addUser(
            user,
            () => props.history.push(appConstants.userRoute),
            (msg: string) => console.log(msg)
        ))
    }
    const updateHandler = (event: SyntheticEvent) => {
        const ele = event.target as HTMLInputElement;
        setUser({...user, [ele.id]: ele.value})
        // setUser({...user, [ele.id]: ele.value,
        //     profiles: {...user.profiles, [ele.id]: ele.value}
        // })
    }

    const updateHandler2 = (event: SyntheticEvent) => {
        const ele = event.target as HTMLInputElement;
        // console.log(ele.id, ele.value);
        user.profiles[0].type = ele.value;
        setUser({...user});
        // setUser({...user, profiles: [...user.profiles, [ele.id]: ele.value]})

    }

    const updateHandler3 = (event: SyntheticEvent) => {
        const ele = event.target as HTMLInputElement;
        //profiles: {...user.profiles, [ele.id]: ele.value}
        // console.log(ele.id, ele.value);
        user.profiles[0].id = ele.value;
        setUser({...user});
        // setUser({...user, [ele.id]: ele.value})
        console.log(user);
    }

    return(
        <form className={css.LargeForm} onSubmit={submitHandler}>
            <label>Email</label>
            <input value={user.email} onChange={updateHandler} type="text" name="email" id="email"/>

            <label>Password</label>
            <input value={user.password} onChange={updateHandler} type="text" name="password" id="password"/>

            <label>Type</label>
            <input value={user.profiles[0].type} onChange={updateHandler2} type="text" name="type" id="type"/>

            <label>Type Id</label>
            <input value={user.profiles[0].id} onChange={updateHandler3} type="text" name="id" id="id"/>

            <button className="btn btn-primary">Save</button>
        </form>
    )
}

export default AddUser;

interface AddUserProps extends RouteComponentProps {
    // userData: UserModel [];
}
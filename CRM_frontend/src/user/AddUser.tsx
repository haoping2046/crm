import {RouteComponentProps} from "react-router-dom";
import React, {createRef, SyntheticEvent, useState} from 'react';
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

    const checkHandler = (event: SyntheticEvent) => {
        const ele = event.target as HTMLInputElement;

        let newProfiles = [...user.profiles].filter(p => p.id != ''); // remove empty obj

        if(ele.checked) {
            setUser({...user, profiles: [...newProfiles, {id: ele.value, type: ele.name}] })
        } else {
            newProfiles.splice(user.profiles.indexOf({id: ele.value, type:ele.name}, 1));
            setUser({...user, profiles: newProfiles});
        }
    }
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
    }



    return(
        <form className={css.LargeForm} onSubmit={submitHandler}>
            <label>Email</label>
            <input value={user.email} onChange={updateHandler} type="email" name="email" id="email"/>

            <label>Password</label>
            <input value={user.password} onChange={updateHandler} type="text" name="password" id="password"/>

            <label>Type</label>
            <div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" onChange={checkHandler} type="checkbox" id={appConstants.admin} name={appConstants.admin} value="1"/>
                    <label className="form-check-label">admin</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" onChange={checkHandler} type="checkbox" id={appConstants.salesLeader} name={appConstants.salesLeader} value="2"/>
                    <label className="form-check-label">sales leader</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" onChange={checkHandler} type="checkbox" id={appConstants.salesLeader} name={appConstants.seniorSale} value="3"/>
                    <label className="form-check-label">senior sale</label>
                </div>
            </div>

            <button className="btn btn-primary">Save</button>
        </form>
    )
}

export default AddUser;

interface AddUserProps extends RouteComponentProps {
    // userData: UserModel [];
}
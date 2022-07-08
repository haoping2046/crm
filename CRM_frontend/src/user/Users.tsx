import React, {SyntheticEvent, useEffect} from "react";
import {ReduxState} from "../models/user.model";
import {RouteComponentProps} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../actions/user.action";
import {appConstants} from "../constants/constants";

const Users = (props: UserProps) => {

    const dispatch = useDispatch();

    const userData = useSelector((state: ReduxState) => state.userData)

    useEffect(() => {
        dispatch(getUsers());
    }, [])

    const addHandle = (event: SyntheticEvent) => {
        props.history.push(appConstants.addUserRoute);
    }

    return (
        <>
            <button className="btn btn-success" onClick={addHandle}>+ New user</button>
            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>Email</th>
                    <th>Type</th>
                    <th>Enabled</th>
                </tr>
                </thead>
                <tbody>
                {
                    userData?.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.email}</td>
                                <td>{user.profiles.map((p, index) => {
                                    return (
                                        <span key={p.id}>
                                            {(index ? ', ' : '') + p.type}
                                        </span>
                                    )
                                })}</td>
                                <td>{user.enabled? "true" : "false"}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>

        </>

    )
}

export default Users;

interface UserProps extends RouteComponentProps {

}




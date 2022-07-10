import React, {SyntheticEvent, useEffect} from "react";
import {ReduxState} from "../models/user.model";
import {RouteComponentProps} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../actions/user.action";
import {appConstants} from "../constants/constants";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
        marginBottom: 10,
    },
    title: {
        marginBottom: 20,
    },
});

const Users = (props: UserProps) => {
    const classes = useStyles();
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
            <Typography className={classes.title} variant="h4" gutterBottom>
                User
            </Typography>
            <Button variant="contained" color="primary" className={classes.button} startIcon={<AddIcon />} onClick={addHandle}>
                ADD USER
            </Button>

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




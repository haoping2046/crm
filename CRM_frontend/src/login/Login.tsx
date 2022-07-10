import React, {SyntheticEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import {login} from "../actions/auth.action";
import {RouteComponentProps} from "react-router-dom";
import css from './Login.module.scss';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        login: {
            width: 600,
            margin: 'auto',
            marginTop: 14,
            paddingLeft: 14,

            // padding: 30,
            // display: 'flex',
            // flexDirection: 'column',

            // box-shadow: 3px 3px 8px 1px #80808042;
            // margin: 20px auto;

            // '& .MuiTextField-root': {
            //     margin: theme.spacing(1),
            //     width: '25ch',
            // },
        },
        field: {
            marginBottom: 30,
            width: 500,
            display: 'block',
        },
        title: {
            marginBottom: 20,
        },
    }),
);

const Login = (props: LoginProps) => {
    const classes = useStyles();
    // useState hook
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    // useDispatch from react-redux
    const dispatch = useDispatch();

    const updateHandler = (event: SyntheticEvent) => {
        const ele = event.target as HTMLInputElement;
        setUser({...user, [ele.id]: ele.value});
    };

    const submitHandler = (event: SyntheticEvent) => {
        event.preventDefault();
        setEmailError(false);
        setPasswordError(false);
        if (user.email === '') setEmailError(true)
        if (user.password === '') setPasswordError(true)

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
            <Typography className={classes.title} variant="h4" gutterBottom align="center">
                LOGIN
            </Typography>

            <Card className={classes.login} elevation={3}>
                <CardContent>
                    {/*<form className={css.Login}>*/}
                    <form className={classes.login}>
                        <TextField error={emailError} className={classes.field} fullWidth onChange={updateHandler} value={user.email} id="email" label="Email" type="email"/>
                        <TextField error={passwordError} className={classes.field} fullWidth onChange={updateHandler} value={user.password} id="password" label="Password" type="password"/>
                        <Button variant="contained" color="primary" onClick={submitHandler}>LOGIN</Button>
                    </form>
                </CardContent>
            </Card>
        </>
    );
}

export default Login;

interface LoginProps extends RouteComponentProps {

}
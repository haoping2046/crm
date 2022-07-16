import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {login} from "../actions/auth.action";
import {RouteComponentProps} from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import * as Yup from "yup";
import {useFormik} from "formik";

const loginSchema = Yup.object().shape({
    email: Yup.string().email('Enter a valid email').required('Email is required'),
    password: Yup.string().min(4, "Password must be at least 4 characters").required('Password is required'),
});

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        login: {
            width: 500,
            margin: 'auto',
            marginTop: 24,
            paddingLeft: 14,
        },
        field: {
            marginBottom: 30,
            width: 440,
            display: 'block',
        },
        title: {
            marginBottom: 20,
        },
    }),
);

const Login = (props: LoginProps) => {
    const classes = useStyles();
    const [user] = useState({
        email: '',
        password: ''
    });

    const dispatch = useDispatch();

    const formik = useFormik({
        enableReinitialize: true, // initialize and render
        initialValues: {...user},
        validationSchema: loginSchema,
        onSubmit: (values) => {
            dispatch(login(
                values,
                () => props.history.goBack(),
                // () => props.history.push(appConstants.userRoute),
                (msg: string) => console.log(msg)
            ));
        },
    })

    return (
        <>
            <Typography className={classes.title} variant="h4" gutterBottom align="center">
                LOGIN
            </Typography>

            <Card className={classes.login} elevation={3}>
                <CardContent>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField fullWidth className={classes.field} id="email" label="Email" type="email"
                                   value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                   error={formik.touched.email && Boolean(formik.errors.email)}
                                   helperText={formik.touched.email && formik.errors.email}/>
                        <TextField fullWidth className={classes.field}  id="password" label="Password" type="password"
                                   value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                   error={formik.touched.password && Boolean(formik.errors.password)}
                                   helperText={formik.touched.password && formik.errors.password}/>
                        <Button variant="contained" color="primary" type="submit">LOGIN</Button>
                    </form>
                </CardContent>
            </Card>
        </>
    );
}

export default Login;

interface LoginProps extends RouteComponentProps {

}
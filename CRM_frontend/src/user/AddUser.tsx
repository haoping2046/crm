import {RouteComponentProps} from "react-router-dom";
import React, {SyntheticEvent, useState, useRef} from 'react';
import {addUser} from "../actions/user.action";
import {appConstants} from "../constants/constants";
import {useDispatch} from "react-redux";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel'
import Checkbox from '@material-ui/core/Checkbox';
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {FormControl} from "@material-ui/core";
import {useFormStyles} from "../util/formStyle";
import {useFormik} from "formik";
import * as Yup from "yup";

const editUserSchema = Yup.object().shape({
    email: Yup.string().email('Enter a valid email').required('Email is required'),
    password: Yup.string().min(6, 'Password should be of minimum 6 characters length').required('Password is required'),
});

const AddUser = (props: AddUserProps) => {
    const classes = useFormStyles();
    const [user, setUser] = useState({
        email: '',
        password: '',
        profiles: [{id: '', type: ''}],
    })
    const dispatch = useDispatch();

    const checkHandler = (event: SyntheticEvent) => {
        const ele = event.target as HTMLInputElement;
        let newProfiles = [...user.profiles].filter(p => p.id !== ''); // remove empty obj

        if(ele.checked) {
            setUser({...user, profiles: [...newProfiles, {id: ele.value, type: ele.name}] })
        } else {
            newProfiles.splice(user.profiles.indexOf({id: ele.value, type:ele.name}, 1));
            setUser({...user, profiles: newProfiles});
        }
    }
    const updateHandler = (event: SyntheticEvent) => {
        const ele = event.target as HTMLInputElement;
        setUser({...user, [ele.id]: ele.value})
    }
    const submitHandler = (event: SyntheticEvent) => {
        event.preventDefault();
        dispatch(addUser(
            user,
            () => props.history.push(appConstants.userRoute),
            (msg: string) => console.log(msg)
        ))
    }
    const formik = useFormik({
        initialValues: {...user},
        validationSchema: editUserSchema,
        onSubmit: (values) => {
            // console.log(values.email);
            // let newState = {...user, 'email': values.email, 'password': values.password}
            // let newP = [...values.profiles].filter(p => p.id !== ''); // remove empty obj
            //
            // if(values.profiles.find((p) => {return JSON.stringify(p) == appConstants.admin})) {
            //     setUser({...newState, profiles: [...newP, {id: '1', type: appConstants.admin}] })
            // }
            // if(values.profiles.find((p) => {return JSON.stringify(p) == appConstants.salesLeader})) {
            //     setUser({...newState, profiles: [...newP, {id: '2', type: appConstants.salesLeader}] })
            // }
            // if(values.profiles.find((p) => {return JSON.stringify(p) == appConstants.seniorSale})) {
            //     setUser({...user, profiles: [...newP, {id: '3', type: appConstants.seniorSale}] })
            // }
            //
            // alert(JSON.stringify(user, null, 2));
            // dispatch(addUser(
            //     user,
            //     () => props.history.push(appConstants.userRoute),
            //     (msg: string) => console.log(msg)
            // ))
        },
    })
    return(
        <Card className={classes.form} elevation={3}>
            <CardContent>
                <form className={classes.form}>
                    <Typography className={classes.title} variant="h4" gutterBottom>
                        Add User
                    </Typography>

                    <TextField required fullWidth id="email" label="Email" type="email" variant="outlined"
                               value={user.email} onChange={updateHandler} onBlur={formik.handleBlur}/>
                    <TextField required fullWidth id="password" label="Password" type="password" variant="outlined"
                               value={user.password} onChange={updateHandler} onBlur={formik.handleBlur}/>
                    <FormControl>
                        <FormLabel>Type</FormLabel>
                        <FormGroup row>
                            <FormControlLabel control={<Checkbox onChange={checkHandler} color="primary" name={appConstants.admin}/>} value="1" label="admin" />
                            <FormControlLabel control={<Checkbox onChange={checkHandler} color="primary" name={appConstants.salesLeader}/>} value="2" label="sales leader" />
                            <FormControlLabel control={<Checkbox onChange={checkHandler} color="primary" name={appConstants.seniorSale}/>} value="3" label="senior sale" />
                        </FormGroup>
                    </FormControl>

                    <div className={classes.buttonGroup}>
                        <Button variant="contained" color="primary" onClick={submitHandler}>SAVE</Button>
                        <Button variant="outlined" onClick={() => props.history.push(appConstants.userRoute)}>CANCEL</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}

export default AddUser;

interface AddUserProps extends RouteComponentProps {

}
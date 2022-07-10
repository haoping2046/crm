import {RouteComponentProps} from "react-router-dom";
import React, {SyntheticEvent, useState} from 'react';
import {addUser} from "../actions/user.action";
import {appConstants} from "../constants/constants";
import {useDispatch} from "react-redux";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel'
import Checkbox from '@material-ui/core/Checkbox';
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {FormControl} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        buttonGroup: {
            '& > *': {
                margin: theme.spacing(4, 2, 0, 0),
            },
        },
        title: {
            marginBottom: 20,
        },
        form: {
            width: 600,
            margin: 'auto',
            marginTop: 14,
            paddingLeft: 14,
            '& .MuiTextField-root': {
                margin: theme.spacing(0, 0, 3, 0),
                width: 500,
            },

        }
    }),
);

const AddUser = (props: AddUserProps) => {
    const [user, setUser] = useState({
        email: '',
        password: '',
        profiles: [{id: '', type: ''}],
    })
    const classes = useStyles();
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
        <>
            <Card className={classes.form} elevation={3}>
                <CardContent>
                    <form className={classes.form}  noValidate autoComplete="off">
                        <Typography className={classes.title} variant="h4" gutterBottom>
                            Add User
                        </Typography>
                        {/*<form className={css.LargeForm}>*/}
                        <TextField required fullWidth onChange={updateHandler} value={user.email} id="email" label="Email" type="email" variant="outlined"/>
                        <TextField required fullWidth onChange={updateHandler} value={user.password} id="password" label="Password" type="password" variant="outlined"/>
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

        </>

    )
}

export default AddUser;

interface AddUserProps extends RouteComponentProps {

}
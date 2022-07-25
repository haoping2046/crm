import React, {SyntheticEvent, useState} from 'react';
import {RouteComponentProps} from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import {appConstants, ReduxState} from "../constants/constants";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import {useFormStyles} from "../util/formStyle";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import * as Yup from "yup";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {FormControl} from "@material-ui/core";
import {addOrder} from "../actions/orders.action";

const editUserSchema = Yup.object().shape({
    email: Yup.string().email('Enter a valid email').required('Email is required'),
    password: Yup.string().min(6, 'Password should be of minimum 6 characters length').required('Password is required'),
});

const AddOrder = (props: AddOrderProps) => {
    const classes = useFormStyles();
    const [order, setOrder] = useState({
        title: '',
        orderCustomer: {customer: {name: '', company: '', phone: ''}},
        purchases: [{product: {name: ''}}],
        purchase_date: '',
        approval_status: 'Pending',
        discount: 0,
        orderUser: {user: {name: ''}},
    })

    const user = useSelector((state: ReduxState) => state.auth);
    const dispatch = useDispatch();

    const checkHandler = (event: SyntheticEvent) => {
        const ele = event.target as HTMLInputElement;
        let newPurchases = [...order.purchases].filter(p => p.product.name!== ''); // remove empty obj

        if(ele.checked) {
            setOrder({...order, purchases: [...newPurchases, {product: {name: ele.name}}] })
        } else {
            newPurchases.splice(order.purchases.indexOf({product: {name: ele.name}}, 1));
            setOrder({...order, purchases: newPurchases});
        }
    }

    const updateHandler = (event: SyntheticEvent) => {
        const ele = event.target as HTMLInputElement;
        console.log(ele.id, ele.value)
        setOrder({...order, [ele.id]: ele.value})
    }
    const submitHandler = (event: SyntheticEvent) => {
        event.preventDefault();
        dispatch(addOrder(
            order,
            () => props.history.push(appConstants.orderRoute),
            (msg: string) => console.log(msg)
        ))
    }
    const formik = useFormik({
        initialValues: {...order},
        validationSchema: editUserSchema,
        onSubmit: (values) => {

        },
    })
    return (
        <Card className={classes.form} elevation={3}>
            <CardContent>
                <form className={classes.form}>
                    <Typography className={classes.title} variant="h4" gutterBottom>
                        Add User
                    </Typography>

                    <TextField required fullWidth id="title" label="Title" type="text" variant="outlined"
                               value={order.title} onChange={updateHandler} onBlur={formik.handleBlur}/>
                    <TextField required fullWidth id={order.orderCustomer.customer.name} label="Customer Name" type="text" variant="outlined"
                               value={order.orderCustomer.customer.name} onChange={updateHandler} onBlur={formik.handleBlur}/>
                    <TextField required fullWidth id={order.orderCustomer.customer.company} label="Company" type="text" variant="outlined"
                               value={order.orderCustomer.customer.company} onChange={updateHandler} onBlur={formik.handleBlur}/>
                    <TextField required fullWidth id="phone" label="Phone" type="text" variant="outlined"
                               value={order.orderCustomer.customer.phone} onChange={updateHandler} onBlur={formik.handleBlur}/>

                    <FormControl>
                        <FormLabel>Product Name</FormLabel>
                        <FormGroup row>
                            <FormControlLabel control={<Checkbox onChange={checkHandler} color="primary" name="fridge"/>} value="1" label="fridge" />
                            <FormControlLabel control={<Checkbox onChange={checkHandler} color="primary" name="air condition"/>} value="2" label="air condition" />
                            {/*{*/}
                            {/*    order.purchases?.map((p, index) => {*/}
                            {/*        return (*/}
                            {/*            <FormControlLabel control={<Checkbox onChange={checkHandler} color="primary" name={p.product.name}/>} value={index} label={p.product.name} />*/}
                            {/*        )*/}
                            {/*    })*/}
                            {/*}*/}
                        </FormGroup>
                    </FormControl>

                    <TextField required fullWidth id="purchaseDate" label="Purchase Date" type="text" variant="outlined"
                               value={order.purchase_date} onChange={updateHandler} onBlur={formik.handleBlur}/>
                    <TextField required fullWidth id="discount" label="Discount" type="text" variant="outlined"
                               value={order.discount} onChange={updateHandler} onBlur={formik.handleBlur}/>

                    <TextField hidden fullWidth id="salesName" label="Sales Date" type="text" variant="outlined"
                               value={user.name} onChange={updateHandler} onBlur={formik.handleBlur}/>

                    <div className={classes.buttonGroup}>
                        <Button variant="contained" color="primary" onClick={submitHandler}>SAVE</Button>
                        <Button variant="outlined" onClick={() => props.history.push(appConstants.userRoute)}>CANCEL</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}

export default AddOrder;

interface AddOrderProps extends RouteComponentProps {

}
import React, {useEffect, useState, useLayoutEffect } from "react";
import {OrderModel, ReduxState} from "../models/order.model";
import {RouteComponentProps} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getOrders} from "../actions/orders.action";
import * as Yup from 'yup';
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { useFormik } from 'formik';
import Button from "@material-ui/core/Button";
import {appConstants} from "../constants/constants";
import {useFormStyles} from "../util/formStyle";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const editOrderSchema = Yup.object().shape({
    title: Yup.string().required('Title name is required'),
    customer_id: Yup.string().required('Customer name is required'),
    product_id: Yup.string().required('Product name is required'),
    user_id: Yup.string().required('User id is required'),
    purchase_date: Yup.string().required('Purchase date is required'),
    approval_status: Yup.string().required('Approval status is required'),
    discount: Yup.string().required('Discount is required'),
});

const EditOrder = (props: EditOrderProps) => {
    const classes = useFormStyles();
    const dispatch = useDispatch();
    const currentOrder = useSelector((state: ReduxState) =>
        Array.isArray(state.orders) && state.orders.find(o => o.id === +props.match.params.id)
    );

    const [order, setOrder] = useState({
        title: '',
        customer_id: 0,
        product_id: 0,
        user_id: 0,
        purchase_date: '',
        approval_status: '',
        discount: 0,
        purchases: [{}],
    });

    useEffect(() => {
        !props.isOrdersLoaded && dispatch(getOrders());
    },[]);

    const formik = useFormik({
        enableReinitialize: true, // initialize and render
        initialValues: {...order, ...currentOrder},
        validationSchema: editOrderSchema,
        onSubmit: (values) => {
            // alert(JSON.stringify(values, null, 2));
        },
    })


    return (
        <>
            <Card className={classes.form} elevation={3}>
                <CardContent>
                    {
                        order ?
                            <form className={classes.form}  onSubmit={formik.handleSubmit}>
                                <Typography variant="h4" gutterBottom>
                                    Edit Order
                                </Typography>
                                <TextField required fullWidth id="title" name="title" label="Title" type="text" variant="outlined"
                                           value={formik.values.title} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                           error={formik.touched.title && Boolean(formik.errors.title)}
                                           helperText={formik.touched.title && formik.errors.title}/>
                                <TextField required fullWidth id="customer_id" name="customer_id" label="Customer name" type="text" variant="outlined"
                                           value={formik.values.customer_id} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                           error={formik.touched.customer_id && Boolean(formik.errors.customer_id)}
                                           helperText={formik.touched.customer_id && formik.errors.customer_id}/>
                                <TextField required fullWidth id="product_id" name="product_id" label="Product id" type="text" variant="outlined"
                                           value={formik.values.product_id} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                           error={formik.touched.product_id && Boolean(formik.errors.product_id)}
                                           helperText={formik.touched.product_id ? formik.errors.product_id : ""}/>
                                <TextField required fullWidth id="user_id"  name="user_id" label="User id" type="text" variant="outlined"
                                           value={formik.values.user_id} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                           error={formik.touched.user_id && Boolean(formik.errors.user_id)}
                                           helperText={formik.touched.user_id && formik.errors.user_id}/>
                                <TextField required fullWidth id="purchase_date"  name="purchase_date" label="Purchase date" type="text" variant="outlined"
                                           value={formik.values.purchase_date!.substring(0, 10)} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                           error={formik.touched.purchase_date && Boolean(formik.errors.purchase_date)}
                                           helperText={formik.touched.purchase_date && formik.errors.purchase_date}/>
                                <TextField required fullWidth id="approval_status"  name="approval_status" label="Approval status" type="text" variant="outlined"
                                           value={formik.values.approval_status} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                           error={formik.touched.approval_status && Boolean(formik.errors.approval_status)}
                                           helperText={formik.touched.approval_status && formik.errors.approval_status}/>
                                <TextField required fullWidth id="discount"  name="discount" label="discount" type="text" variant="outlined"
                                           value={formik.values.discount} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                           error={formik.touched.discount && Boolean(formik.errors.discount)}
                                           helperText={formik.touched.discount && formik.errors.discount}/>
                                <div className={classes.buttonGroup}>
                                    <Button variant="contained" color="primary" type="submit">SAVE</Button>
                                    <Button variant="outlined" onClick={() => props.history.push(appConstants.orderRoute)}>CANCEL</Button>
                                </div>

                            </form>
                            : <h4>Order not found</h4>
                    }


                </CardContent>
            </Card>
        </>

    );

}

export default EditOrder;

interface EditOrderProps extends RouteComponentProps<{ id: string }>{
    order: OrderModel | undefined | false;
    isOrdersLoaded: boolean;
}


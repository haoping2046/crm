import React, {Component, useEffect} from "react";
import css from './EditOrder.module.scss';
import {OrderModel, ReduxState} from "../models/order.model";
import {RouteComponentProps} from "react-router-dom";
import {Field, FieldProps, Form, Formik} from "formik";
import {connect, useDispatch, useSelector} from "react-redux";
import {getOrders} from "../actions/orders.action";
import {AxiosResponse} from "axios";
import * as Yup from 'yup';
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const editOrderSchema = Yup.object().shape({ // 验证input是不是空的
    "customer_id": Yup.string().required('customer name is required'),
    "product_id": Yup.string().required('product name is required'),
    "user_id": Yup.string().required('user_id is required'),
    "purchase_date": Yup.string().required('purchase_date is required'),
    "approval_status": Yup.string().required('approval_status is required'),
    "discount": Yup.string().required('discount is required'),
});

const EditOrder = (props: EditOrderProps) => {
    const dispatch = useDispatch();
    const order = useSelector((state: ReduxState) =>
        Array.isArray(state.orders) && state.orders.find(o => o.id === +props.match.params.id)
    );
    useEffect(() => {
        !props.isOrdersLoaded && dispatch(getOrders());
    },[])

    const handleSubmit = () => {

    }

    const renderField = ({field, form: {errors, touched}, ...props}: FieldProps) => {
        return (
          <>
              <input
                  {...field}
                  {...props}
                  type="text"/>
              {
                  <p className="text-danger">{errors[field.name]}</p>
                  // touched[field.name] && <p className="text-danger">{errors[field.name]}</p>
              }
          </>
        );
    }


    return (
        order ?
        <Formik onSubmit={handleSubmit}
                initialValues={order}
                validationSchema={editOrderSchema}>
            { ({errors, isValid}) => (
                <Form className={css.EditOrder}>
                    <Typography variant="h4" gutterBottom>
                        Edit Order
                    </Typography>

                    <label htmlFor="customer_id">customer name:</label>
                    <Field type="text" name="customer_id" component={renderField}/>

                    <label htmlFor="product_id">product name:</label>
                    <Field type="text" name="product_id" component={renderField}/>

                    <label htmlFor="user_id">user id:</label>
                    <Field type="number" name="user_id" component={renderField}/>

                    <label htmlFor="purchase_date">purchase date:</label>
                    <Field type="text" name="purchase_date" component={renderField}/>

                    <label htmlFor="approval_status">approval status:</label>
                    <Field type="text" name="approval_status" component={renderField}/>

                    <label htmlFor="discount">discount:</label>
                    <Field type="text" name="discount" component={renderField}/>

                    <button disabled={!isValid} className="btn btn-primary">Edit Product</button>
                </Form>
            )}

        </Formik> :
            <h4>Order not found</h4>
    );

}


export default EditOrder;

interface EditOrderProps extends RouteComponentProps<{ id: string }>{
    isOrdersLoaded: boolean
}


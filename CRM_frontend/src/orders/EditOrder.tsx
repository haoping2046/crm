import {Component} from "react";
import css from './EditOrder.module.scss';
import {OrderModel, ReduxState} from "../models/order.model";
import {RouteComponentProps} from "react-router-dom";
import {Field, FieldProps, Form, Formik} from "formik";
import {connect} from "react-redux";
import {getOrders} from "../actions/orders.action";
import {AxiosResponse} from "axios";
import * as Yup from 'yup';

const editOrderSchema = Yup.object().shape({ // 验证input是不是空的
    "customer_id": Yup.string().required('customer name is required'),
    "product_id": Yup.string().required('product name is required'),
    "user_id": Yup.string().required('user_id is required'),
    "purchase_date": Yup.string().required('purchase_date is required'),
    "approval_status": Yup.string().required('approval_status is required'),
    "discount": Yup.string().required('discount is required'),
});

class EditOrder extends Component<EditOrderProps, any> {

    componentDidMount() {
        !this.props.isOrdersLoaded && this.props.getOrders();
    }

    handleSubmit = () => {

    }

    renderField = ({field, form: {errors, touched}, ...props}: FieldProps) => {

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

    render() {
        return (
            this.props.order ?
            <Formik onSubmit={this.handleSubmit}
                    initialValues={ this.props.order }
                    validationSchema={editOrderSchema}>
                { ({errors, isValid}) => (
                    <Form className={css.EditOrder}>
                        <h2>Edit Order {this.props.match.params.id}</h2>

                        <label htmlFor="customer_id">customer name:</label>
                        <Field type="text" name="customer_id" id="customer_id" component={this.renderField}/>

                        <label htmlFor="product_id">product name:</label>
                        <Field type="text" name="product_id" id="product_id" component={this.renderField}/>

                        <label htmlFor="user_id">user id:</label>
                        <Field type="number" name="user_id" id="user_id" component={this.renderField}/>

                        <label htmlFor="purchase_date">purchase date:</label>
                        <Field type="text" name="purchase_date" id="purchase_date" component={this.renderField}/>

                        <label htmlFor="approval_status">approval status:</label>
                        <Field type="text" name="approval_status" id="approval_status" component={this.renderField}/>

                        <label htmlFor="discount">discount:</label>
                        <Field type="text" name="discount" id="discount" component={this.renderField}/>

                        <button disabled={!isValid} className="btn btn-primary">Edit Product</button>
                    </Form>
                )}

            </Formik> :
                <h4>Order not found</h4>
        );
    }
}

function mapStateToProps({orders}: ReduxState, ownProps: EditOrderProps) {
    console.log(ownProps);
    const id = +ownProps.match.params.id;
    const order = Array.isArray(orders) && orders.find(o => o.id === id);

    return {
        order,
        isOrdersLoaded: (orders !== null),
    } as EditOrderProps;
}

export default connect(mapStateToProps, {getOrders})(EditOrder);

interface EditOrderProps extends RouteComponentProps<{ id: string }>{
    order: OrderModel | undefined | false;
    getOrders: () => {
        type: string;
        payload: AxiosResponse
    };
    isOrdersLoaded: boolean;
}


import {Component} from "react";
import {OrderModel, ReduxState} from "../models/order.model";
import {AxiosResponse} from "axios";
import {connect} from "react-redux";
import {getOrders} from "../actions/orders.action";
import {Link} from "react-router-dom";
import {appConstants} from "../constants/constants";

class Orders extends Component<OrdersProps, any> {

    componentDidMount() {
        this.props.getOrders();
    }

    render() {
        return (
            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>customer id</th>
                    <th>product id</th>
                    <th>user id</th>
                    <th>purchase date</th>
                    <th>approval status</th>
                    <th>discount</th>
                    <th>operation</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.orders?.map((order) => {
                        return (
                            <tr key={order.id}>
                                <td>{order.customer_id}</td>
                                <td>{order.product_id}</td>
                                <td>{order.user_id}</td>
                                <td>{order.purchase_date}</td>
                                <td>{order.approval_status}</td>
                                <td>{order.discount}</td>
                                <td>
                                    <Link className="nav-link"
                                          to={`${appConstants.editOrderRoute}/${order.id}`}>modify</Link>
                                </td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({orders}: ReduxState) {
    return {orders};
}

export default connect(mapStateToProps, {getOrders})(Orders)

interface OrdersProps {
    orders: OrderModel [];
    getOrders: () => {
        type: string;
        payload: Promise<AxiosResponse>
    }
}
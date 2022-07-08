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
                    <th>product name</th>
                    <th>user id</th>
                    <th>purchase date</th>
                    <th>approval status</th>
                    <th>discount</th>
                    <th>operation</th>
                </tr>
                </thead>
                <tbody>
                {
                    // .map((purchase)=>{purchase.product.name})
                    this.props.orders?.map((order) => {
                        return (
                            <tr key={order.id}>
                                <td>{order.customer_id}</td>
                                <td>{order.purchases.map((p, index) => {
                                    return (
                                        <span key={p.product.id}>
                                            {(index ? ', ' : '') + p.product.name}
                                        </span>
                                    )
                                })}</td>
                                <td>{order.user_id}</td>
                                <td>{order.purchase_date.substring(0, 10)}</td>
                                <td>{order.approval_status}</td>
                                <td>{order.discount}</td>
                                <td>
                                    <Link className="nav-link"
                                          to={`${appConstants.editOrderRoute}/${order.id}`}>modify</Link>
                                    <Link className="nav-link"
                                          to={`${appConstants.editOrderRoute}/${order.id}`}>delete</Link>
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
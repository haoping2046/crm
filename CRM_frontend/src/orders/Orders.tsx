import {useEffect} from "react";
import {ReduxState} from "../models/order.model";
import {useDispatch, useSelector} from "react-redux";
import {getOrders} from "../actions/orders.action";
import {Link, RouteComponentProps} from "react-router-dom";
import {appConstants} from "../constants/constants";
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton'

const Orders = (props: OrdersProps) => {
    const dispatch = useDispatch();
    const orders = useSelector((state: ReduxState) => state.orders)
    useEffect(() => {
        dispatch(getOrders());
    }, [])

    return (
        <>
            <Typography variant="h4" gutterBottom>
                Order
            </Typography>

            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>title</th>
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
                    orders?.map((order) => {
                        return (
                            <tr key={order.id}>
                                <td>{order.title}</td>
                                <td>{order.customer_id}</td>
                                <td>{order.purchases?.map((p, index) => {
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
                                    <IconButton aria-label="edit" component={Link} to={`${appConstants.editOrderRoute}/${order.id}`}>
                                        <EditIcon />
                                    </IconButton>

                                    <IconButton aria-label="delete" component={Link} to={`${appConstants.editOrderRoute}/${order.id}`}>
                                        <DeleteIcon />
                                    </IconButton>
                                </td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        </>


    );

}

export default Orders;

interface OrdersProps extends RouteComponentProps{

}
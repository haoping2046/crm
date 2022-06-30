import React from "react";
import {Link} from "react-router-dom";
import {appConstants} from "../constants/constants";

export const List = ({list, users}) => {
    return (
        <table className="table table-striped table-bordered">
            <thead>
            <tr>
                <th>order id</th>
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
                list?.map((order) => {
                    return (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.customer_id}</td>
                            {/*<td>{users.find(user => user.id === order.customer_id)?.name || '未知'}</td>*/}
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
    )
}
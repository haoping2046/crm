import React, {SyntheticEvent, useEffect, useState} from "react";
import {ReduxState} from "../models/order.model";
import {useDispatch, useSelector} from "react-redux";
import {deleteOrder, getOrders} from "../actions/orders.action";
import {Link, RouteComponentProps} from "react-router-dom";
import {appConstants} from "../constants/constants";
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton'
import Modal from '@material-ui/core/Modal';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// delete
function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 450,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
        buttonGroup: {
            '& > *': {
                margin: theme.spacing(4, 2, 0, 0),
            },
        },
    }),
);

const Orders = (props: OrdersProps) => {
    const dispatch = useDispatch();
    const ordersData = useSelector((state: ReduxState) => state.orders)
    useEffect(() => {
        dispatch(getOrders());
    }, [])

    const [orders, setOrders] = useState(ordersData);
    useEffect(() => {
        dispatch(getOrders());
    }, [orders])

    // delete modal
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const deleteHandler = (id: number) => {
        dispatch(deleteOrder(
            id,
            () => props.history.push(appConstants.userRoute),
            (msg: string) => console.log(msg)
        ));

        console.log(ordersData);
        let newOrder = ordersData.filter((o) => o.id !== id)
        console.log(newOrder);
        setOrders({...orders, ...newOrder});
        handleClose();
    }

    const body = (id: number) => (
        <div style={modalStyle} className={classes.paper}>
            <h4 id="simple-modal-title">Are you sure you want to delete?</h4>
            <div className={classes.buttonGroup}>
                <Button variant="contained" color="secondary" onClick={() => deleteHandler(id)}>DELETE</Button>
                <Button variant="outlined" onClick={handleClose}>CANCEL</Button>
            </div>
        </div>
    );

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
                    ordersData?.map((order) => {
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

                                    <IconButton aria-label="delete" onClick={handleOpen}>
                                        <DeleteIcon />
                                    </IconButton>

                                    <Modal open={open} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
                                        {body(order.id)}
                                    </Modal>
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
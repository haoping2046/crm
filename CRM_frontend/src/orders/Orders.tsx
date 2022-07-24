import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteOrder, getOrders, getPersonalOrders} from "../actions/orders.action";
import {Link, RouteComponentProps} from "react-router-dom";
import {ReduxState, appConstants} from "../constants/constants";
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton'
import Modal from '@material-ui/core/Modal';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from "@material-ui/icons/Add";

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
        button: {
            marginBottom: 10,
        },
        title: {
            marginBottom: 20,
        },
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
    const orders = useSelector((state: ReduxState) => state.orders);
    const auth = useSelector((state: ReduxState) => state.auth);

    const types = auth.profiles?.map((p) => p.type);
    const id = auth.id;

    useEffect(() => {
        if (types.includes("sales leader") || types.includes("admin")) {
            dispatch(getOrders());
        } else {
            dispatch(getPersonalOrders(id));
        }
    }, [dispatch])


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
            <Typography className={classes.title}  variant="h4" gutterBottom>
                Order
            </Typography>
            <Link to={`${appConstants.addOrderRoute}`}>
                <Button variant="contained" color="primary" className={classes.button} startIcon={<AddIcon />}>
                    ADD ORDER
                </Button>
            </Link>

            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Customer name</th>
                    <th>Company</th>
                    <th>Phone</th>
                    <th>Product name</th>
                    <th>Purchase date</th>
                    <th>Discount</th>
                    <th>Approval status</th>
                    <th>Sales name</th>
                    <th>Operation</th>
                </tr>
                </thead>
                <tbody>
                {
                    orders?.map((order) => {
                        return (
                            <tr key={order.id}>
                                <td>{order.title}</td>
                                <td>{order.orderCustomer.customer.name}</td>
                                <td>{order.orderCustomer.customer.company}</td>
                                <td>{order.orderCustomer.customer.phone}</td>
                                <td>{order.purchases?.map((p, index) => {
                                    return (
                                        <span key={p.product.id}>
                                            {(index ? ', ' : '') + p.product.name}
                                        </span>
                                    )
                                })}</td>

                                <td>{order.purchase_date.substring(0, 10)}</td>
                                <td>{order.discount}</td>
                                <td>{order.approval_status}</td>
                                <td>{order.orderUser.user.name}</td>
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
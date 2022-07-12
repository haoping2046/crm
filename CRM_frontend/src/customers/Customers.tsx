import {RouteComponentProps} from "react-router-dom";
import {useListStyles} from "../util/listStyle";
import {useDispatch, useSelector} from "react-redux";
import {ReduxState} from "../models/customer.model";

const Customers = (props: CustomersProps) => {
    const classes = useListStyles();
    const dispatch = useDispatch();
    const customers = useSelector((state: ReduxState) => state.customers)

}

export default Customers;

interface CustomersProps extends RouteComponentProps {

}
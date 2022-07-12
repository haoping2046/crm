import {RouteComponentProps} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {useDispatch, useSelector} from "react-redux";
import {ReduxState} from "../models/order.model";
import {useEffect} from "react";
import {getOrders} from "../actions/orders.action";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

const Home = (props: HomeProps) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const orders = useSelector((state: ReduxState) => state.orders);
    useEffect(() => {
        dispatch(getOrders());
    }, [])

    return (
        <>
            <Container>
                <Typography variant="h4" gutterBottom>
                    Last 1 day order
                </Typography>
                <Grid container spacing={3}>
                    {
                        orders?.map((order) => {
                            return (
                                <Grid item key={order.id} xs={12} md={6}>
                                    <Paper>{order.title}</Paper>
                                </Grid>
                            )

                        })
                    }
                </Grid>

            </Container>
        </>
    )
}

export default Home;

interface HomeProps extends RouteComponentProps {

}
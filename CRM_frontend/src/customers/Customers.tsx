import {DataGrid, GridColDef,} from '@material-ui/data-grid';
import {useListStyles} from "../util/listStyle";
import {RouteComponentProps} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ReduxState} from "../models/customer.model";
import React, {useEffect, useState} from "react";
import {getCustomers} from "../actions/customers.action";
import Typography from "@material-ui/core/Typography";
import QuickSearchToolbar from "./QuickSearchToolbar";

const columns: GridColDef[] = [
    {field: 'name', headerName: 'Name', width: 200,},
    {field: 'company', headerName: 'Company', width: 350,},
    {field: 'phone', headerName: 'Phone', type: 'number', width: 150,},
];

function escapeRegExp(value: string): string {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

const Customers = (props: CustomersProps) => {
    const classes = useListStyles();
    const dispatch = useDispatch();
    const customers = useSelector((state: ReduxState) => state.customers || [])
    const [rows, setRows] = useState(customers);
    useEffect(() => {
        dispatch(getCustomers());
    }, []);

    const [pageSize, setPageSize] = useState<number>(5);

    // search filter
    const [searchText, setSearchText] = React.useState('');

    const requestSearch = (searchValue: string) => {
        setSearchText(searchValue);
        const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
        const filteredRows = customers.filter((row: any) => {
            return Object.keys(row).some((field: any) => {
                return searchRegex.test(row[field].toString());
            });
        });
        setRows(filteredRows);
    };
    React.useEffect(() => {
        setRows(customers);
    }, [customers]);

    return (
        <>
            <Typography className={classes.title} variant="h4" gutterBottom>
                Customer
            </Typography>

            <div style={{ height: 440, width: '100%' }}>
                <DataGrid

                    rows={rows}
                    columns={columns}
                    pageSize={pageSize}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    rowsPerPageOptions={[5, 10, 20]}
                    pagination
                    checkboxSelection
                    disableSelectionOnClick
                    components = {{
                        Toolbar: QuickSearchToolbar
                    }}

                    componentsProps={{
                        toolbar: {
                            value: searchText,
                            onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
                                requestSearch(event.target.value),
                            clearSearch: () => requestSearch(''),
                        },
                    }}

                />
            </div>
        </>
    )
}

export default Customers;

interface CustomersProps extends RouteComponentProps {

}
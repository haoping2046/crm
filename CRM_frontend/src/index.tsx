import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import {applyMiddleware, createStore} from "redux";
import reduxPromise from 'redux-promise';
import {rootReducer} from "./reducers/root.reducer";
import Orders from "./orders/Orders";
import {appConstants} from "./constants/constants";
import EditOrder from "./orders/EditOrder";

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path={appConstants.orderRoute} component={Orders}/>

                    {/*<Route path={appConstants.addProductRoute} component={withGuard(AddProduct)}/>*/}

                    {/*<Route path={appConstants.loginRoute} component={Login}/>*/}
                    <Route path={`${appConstants.editOrderRoute}/:id`} component={EditOrder}></Route>
                    <Redirect path="*" to={appConstants.orderRoute}></Redirect>
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
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
import Login from "./login/Login";
import Users from "./user/Users";
import AddUser from "./user/AddUser";
import {ProjectListScreen} from "./products";
import Logout from "./login/Logout";

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <BrowserRouter>
            <App>
                <Switch>
                    {/*{withGuard(Orders)}*/}
                    <Route path={appConstants.orderRoute} component={Orders}/>
                    <Route path={`${appConstants.editOrderRoute}/:id`} component={EditOrder}/>
                    <Route path={appConstants.loginRoute} component={Login}/>
                    <Route path={appConstants.logoutRoute} component={Logout}/>
                    <Route path={appConstants.userRoute} component={Users}/>
                    <Route path={appConstants.addUserRoute} component={AddUser}/>
                    <Route path={appConstants.testRoute} component={ProjectListScreen}/>
                    <Redirect path="*" to={appConstants.orderRoute}/>
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

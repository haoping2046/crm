import {NavLink} from "react-router-dom";
import {appConstants} from "../constants/constants";
import {useSelector} from "react-redux";
import {ReduxState} from "../models/order.model";
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';

const Header = () => {
    const user = useSelector((state: ReduxState) => state.user);

    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <a href="#" className="navbar-brand">CRM</a>
            <ul className="nav navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to={appConstants.homeRoute}>
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={appConstants.orderRoute}>
                        Order
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={appConstants.orderRoute}>
                        Plan
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={appConstants.orderRoute}>
                        Customer
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={appConstants.userRoute}>
                        User
                    </NavLink>
                </li>
            </ul>

            <ul className="nav navbar-nav ms-auto">
                <li className="nav-item">
                    {
                        !user?
                            <NavLink className="nav-link" to={appConstants.loginRoute}>
                                Login
                            </NavLink>:
                            <NavLink className="nav-link" to={appConstants.logoutRoute}>
                                Logout
                                <ExitToAppSharpIcon/>
                            </NavLink>
                    }

                </li>
            </ul>
        </nav>
    )
}

export default Header;
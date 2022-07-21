import {NavLink} from "react-router-dom";
import {ReduxState, appConstants} from "../constants/constants";
import {useSelector} from "react-redux";
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';

const Header = () => {
    const user = useSelector((state: ReduxState) => state.auth);

    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg" style={{marginBottom: "30px"}}>
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
                {/*<li className="nav-item">*/}
                {/*    <NavLink className="nav-link" to={appConstants.orderRoute}>*/}
                {/*        Plan*/}
                {/*    </NavLink>*/}
                {/*</li>*/}
                <li className="nav-item">
                    <NavLink className="nav-link" to={appConstants.customerRoute}>
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
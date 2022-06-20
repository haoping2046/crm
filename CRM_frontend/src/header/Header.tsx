import {NavLink} from "react-router-dom";
import {appConstants} from "../constants/constants";

const Header = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <a href="#" className="navbar-brand">CRM</a>
            <ul className="nav navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to={appConstants.orderRoute}>
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
                    <NavLink className="nav-link" to={appConstants.orderRoute}>
                        Others
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Header;
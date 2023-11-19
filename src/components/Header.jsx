import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <NavLink to="/"></NavLink>
            <NavLink to="/singin"></NavLink>
            <NavLink to="/singup"></NavLink>
            <NavLink to="/users"></NavLink>
        </div>
    );
};

export default Header;
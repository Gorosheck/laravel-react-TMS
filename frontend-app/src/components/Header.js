import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/"}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/about"}>About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/todo"}>Shopping List</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
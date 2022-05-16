import { Link } from "react-router-dom";
//import { useContext } from "react";
//import { UserContext } from "../contexts/user.context";

import { useSelector } from "react-redux";
import { selectUsername } from "../store/user/user.selectors";

export default function Navbar() {

    //const { username } = useContext(UserContext);
    const username = useSelector(selectUsername);

    return (
        <header>
            <div>LOGO HERE</div>
            <nav>
                <Link to="/home" className="menu-item">Home</Link>
                <Link to="/users" className="menu-item">Users</Link>
                <Link to="/about" className="menu-item">About</Link>
                {username === '' ?
                    (<Link to="/new-user" className="menu-item">New User</Link>) :
                    (<p>Current User: {username}</p>)
                }
            </nav>
        </header>
    )
}
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/user.context";

export default function Navbar() {

    const { username } = useContext(UserContext);

    return (
        <header>
            <div>Logo</div>
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
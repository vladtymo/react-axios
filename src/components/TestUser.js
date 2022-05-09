import { createRef } from "react";

//import { UserContext } from "../contexts/user.context";
import { useDispatch } from "react-redux";
import { clearUsername, setUsername } from "../store/user/user.actions";

export default function TestUser() {

    //const { setUsername, clearUsername } = useContext(UserContext);
    const dispatch = useDispatch();

    const usernameRef = createRef();

    const submitHandler = (event) => {
        event.preventDefault();

        //setUsername(usernameRef.current.value);
        dispatch(setUsername(usernameRef.current.value));
    }
    const clearHandler = () => {
        //clearUsername();
        dispatch(clearUsername());
    }

    return (
        <>
            <h2>Create test user</h2>
            <form onSubmit={submitHandler}>
                <label>Username:
                    <input type="text"
                        placeholder="Enter username"
                        required
                        ref={usernameRef} />
                </label>
                <button type="submit">Create User</button>
            </form>
            <button type="button" onClick={clearHandler}>Clear Username</button>
        </>
    )
}
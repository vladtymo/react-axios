import { createRef, useContext } from "react";
import { UserContext } from "../contexts/user.context";

export default function TestUser() {

    const { setUsername, clearUsername } = useContext(UserContext);

    const usernameRef = createRef();

    const submitHandler = (event) => {
        event.preventDefault();

        //console.log(usernameRef.current.value);
        setUsername(usernameRef.current.value);
    }
    const clearHandler = () => {
        clearUsername();
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
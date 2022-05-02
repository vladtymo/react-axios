import axios from 'axios';
import { useState } from 'react';

export default function UserList() {

    const [users, setUsers] = useState([]);
    // let users = [
    //     { id: 1, name: "farefae" },
    //     { id: 2, name: "rag" },
    //     { id: 3, name: "aerh" },
    // ];


    const loadUsers = async () => {
        const query = "https://jsonplaceholder.typicode.com/users";

        axios.get(query).then(result => {
            console.log(result.data);
            //users = result.data;
            setUsers(result.data);
        });

        let response = await axios.get(query);
        setUsers(response.data);
    }

    const createPost = async () => {
        const query = "https://jsonplaceholder.typicode.com/posts";

        let post = {
            title: 'foo',
            body: 'bar',
            userId: 1
        }
        let response = await axios.post(query, { post });
        console.log(response.status);
    }

    return (
        <>
            <h2>User List</h2>
            <button onClick={loadUsers}>Load Users</button>
            <button onClick={createPost}>Create Post</button>
            <ul>
                {
                    users.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))
                }
            </ul>
        </>
    )
}
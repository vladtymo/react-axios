// import { createContext, useReducer } from "react";

// export const UserContext = createContext({
//     // username property 
//     username: '',            // getter
//     setUsername: () => null, // setter
//     clearUsername: () => null
//     // other data ...
// });

// const INITIAL_STATE = {
//     username: ''
// }

// const USER_ACTION_TYPES = {
//     CLEAR_USERNAME: 'CLEAR_USERNAME',
//     SET_USERNAME: 'SET_USERNAME'
// };

// /*
//     reducer = (state, action) => {
//         return { new state ... }
//     }
// */

// const userReducer = (state, action) => {
//     // type - type of the action
//     // payload - data to do the aciton
//     const { type, payload } = action;

//     switch (type) {
//         case USER_ACTION_TYPES.CLEAR_USERNAME:
//             return {
//                 //email: state.email,
//                 //setUsername: state.setUsername,
//                 ...state,
//                 username: ''
//             };
//         case USER_ACTION_TYPES.SET_USERNAME:
//             return { ...state, username: payload };
//         default:
//             throw new Error('Invalid action type');
//     }
// }

// export const UserProvider = ({ children }) => {
//     const [{ username }, dispatch] = useReducer(userReducer, INITIAL_STATE);

//     // action realizations
//     const clearUsername = () => {
//         dispatch({ type: USER_ACTION_TYPES.CLEAR_USERNAME });
//     }
//     const setUsername = (username) => {
//         dispatch({ type: USER_ACTION_TYPES.SET_USERNAME, payload: username });
//     }

//     //const [username, setUsername] = useState('');

//     const value = { username, setUsername, clearUsername };

//     return <UserContext.Provider value={value}>{children}</UserContext.Provider>
// }
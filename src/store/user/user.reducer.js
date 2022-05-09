import { USER_ACTION_TYPES } from './user.types'

const INITIAL_STATE = {
    username: ''
}

export const userReducer = (state = INITIAL_STATE, action = {}) => {
    // type - type of the action
    // payload - data to do the aciton
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.CLEAR_USERNAME:
            return {
                //email: state.email,
                //setUsername: state.setUsername,
                ...state,
                username: ''
            };
        case USER_ACTION_TYPES.SET_USERNAME:
            return { ...state, username: payload };
        default:
            //throw new Error('Invalid action type');
            return state;
    }
}
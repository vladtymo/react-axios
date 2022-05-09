import { USER_ACTION_TYPES } from './user.types'

export const clearUsername = () => ({ type: USER_ACTION_TYPES.CLEAR_USERNAME });

export const setUsername = (username) => ({ type: USER_ACTION_TYPES.SET_USERNAME, payload: username });
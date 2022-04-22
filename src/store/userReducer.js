const defaultState = {
    userInfo:{
        users: []
    }
}
const LOAD_USERS = 'LOAD_USERS';
const NEW_USER_ADD = 'NEW_USER_ADD';
export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOAD_USERS:
            return {...state, userInfo: {...action.payload, users:[...state.userInfo.users, ...action.payload.users]}};
        case NEW_USER_ADD:
            return {...state, userInfo: {...action.payload}}
        default:
            return state
    }
}

export const loadUsers = (payload) => ({type: LOAD_USERS, payload});
export const addNewUser = (payload) => ({type: NEW_USER_ADD, payload});
const defaultState = {
    token:{
        token:''
    }
}
const LOAD_TOKEN = 'LOAD_TOKEN';
export const tokenReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOAD_TOKEN:
            localStorage.setItem('token', action.payload.token);
            return {...state, token:{token: action.payload.token}};
        default:
            return state;
    }
}

export const newToken = (payload) => ({type: LOAD_TOKEN, payload});
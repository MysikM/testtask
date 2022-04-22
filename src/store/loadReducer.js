const defaultState = {
    loading: false
}

const LOAD_REQUEST =  'LOAD_REQUEST';
const COMPLETE_REQUEST = 'COMPLETE_REQUEST';
export const loadReducer = (state = defaultState, action) => {
    switch(action.type) {
        case LOAD_REQUEST:
            return {...state, loading: true }
        case COMPLETE_REQUEST:
            return {...state, loading: false}
        default:
            return state
    }
}

export const startRequest = () => ({type: LOAD_REQUEST});
export const endRequest = () => ({type: COMPLETE_REQUEST});
const defaultState = {
    status: false
}
const SUCCESS = 'SUCCESS';
const REMOVE ='REMOVE';
export const newUserReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SUCCESS:
            return {...state, status: true}
        case REMOVE:
            return {...state, status: false}
        default:
            return state
    }
}

export const successStatus = () => ({type: SUCCESS});
export const removeStatus = () => ({type: REMOVE});
const defaultState = {
    positions: []
}

const LOAD_POSITIONS = 'LOAD_POSITIONS';

export const positionReducer = (state=defaultState, action) => {
    switch(action.type) {
        case LOAD_POSITIONS:
            return {...state, positions: action.payload}
        default:
            return state;
    }
};

export const loadPositions = (payload) => ({type: LOAD_POSITIONS, payload});
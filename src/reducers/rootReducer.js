import { INC_BREAK, DEC_BREAK } from '../actions/actTypes';

const initialState = {
    breakLength: 5
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case INC_BREAK:
            return {
                ...state,
                breakLength: state.breakLength + 1
            }    
        case DEC_BREAK:
            return {
                ...state,
                breakLength: state.breakLength - 1
            }
        default:
            return state;
    }
}

export default rootReducer;
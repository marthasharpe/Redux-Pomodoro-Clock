import { INC_BREAK, DEC_BREAK } from '../actions/actTypes';

const initialState = {
    breakLength: 0
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case INC_BREAK:
            return {
                breakLength: state + 1
            }    
        case DEC_BREAK:
            return {
                breakLength: state - 1
            }
        default:
            return state;
    }
}

export default rootReducer;
import {
    INC_BREAK,
    DEC_BREAK,
    INC_SESSION,
    DEC_SESSION,
    START_TIMER,
    STOP_TIMER,
    RESET_TIMER
} from '../actions/actTypes';

const initialState = {
    breakLength: 5,
    sessionLength: 25,
    interval: 'Work',
    timeLeft: '25:00',
    running: false,
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
        case INC_SESSION:
            return {
                ...state,
                sessionLength: state.sessionLength + 1
            }    
        case DEC_SESSION:
            return {
                ...state,
                sessionLength: state.sessionLength - 1
            }
        case START_TIMER:
            return {
                ...state,
                running: true,
            }
        case STOP_TIMER:
            return {
                ...state,
                running: false,
            }    
        case RESET_TIMER:
            if (state.interval === 'Session') {
                return {
                    ...state,
                    timeLeft: '25:00'
                }
            } else {
                return {
                    ...state,
                    timeLeft: '05:00'
                }
            }
        default:
            return state;
    }
}

export default rootReducer;
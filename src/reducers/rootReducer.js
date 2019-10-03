import {
    INC_BREAK,
    DEC_BREAK,
    INC_SESSION,
    DEC_SESSION,
    START_TIMER,
    STOP_TIMER,
    RESET_TIMER,
    SWITCH_INTERVAL,
} from '../actions/actCreators';

const initialState = {
    breakLength: 5,
    sessionLength: 25,
    interval: 'Session',
    secondsLeft: 25 * 60,
    timerRunning: false,
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case INC_BREAK:
            if (!state.timerRunning && state.breakLength < 60) {
                return {
                    ...state,
                    breakLength: state.breakLength + 1,
                }    
            }
            break;
        case DEC_BREAK:
            if (!state.timerRunning && state.breakLength > 1) {
                return {
                    ...state,
                    breakLength: state.breakLength - 1,
                }    
            }
            break;
        case INC_SESSION:
            if (!state.timerRunning && state.sessionLength < 60) {
                return {
                    ...state,
                    sessionLength: state.sessionLength + 1,
                    secondsLeft: (state.sessionLength + 1) * 60
                }    
            }
            break;
        case DEC_SESSION:
        if (!state.timerRunning && state.sessionLength > 1) {
            return {
                ...state,
                sessionLength: state.sessionLength - 1,
                secondsLeft: (state.sessionLength - 1) * 60
            }    
        }
        break;
        case START_TIMER:
            console.log('start')
            return {
                ...state,
                timerRunning: true,
            }
        case STOP_TIMER:
            console.log('stop')
            return {
                ...state,
                timerRunning: false,
            }    
        case RESET_TIMER:
            console.log('reset')
            return {
                breakLength: 5,
                sessionLength: 25,
                interval: 'Session',
                secondsLeft: 25 * 60,
                timerRunning: false,
            }
        case SWITCH_INTERVAL:
            console.log('switch')
            return {
                ...state
            }
        default:
            return state;
    }
}

export default rootReducer;
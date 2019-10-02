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
import {
    INC_BREAK,
    DEC_BREAK,
    INC_SESSION,
    DEC_SESSION,
    START_TIMER,
    STOP_TIMER,
    RESET_TIMER,
    SWITCH_BREAK,
    SWITCH_SESSION,
    DEC_SECONDS
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
            console.log('+')
            return {
                ...state,
                breakLength: state.breakLength + 1,
            }
        case DEC_BREAK:
            console.log('-')
            return {
                ...state,
                breakLength: state.breakLength - 1,
            }   
        case INC_SESSION:
            console.log('+')
            return {
                ...state,
                sessionLength: state.sessionLength + 1,
                secondsLeft: (state.sessionLength + 1) * 60
            }
        case DEC_SESSION:
            console.log('-')
            return {
                ...state,
                sessionLength: state.sessionLength - 1,
                secondsLeft: (state.sessionLength - 1) * 60
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
                ...state,
                breakLength: 5,
                sessionLength: 25,
                interval: 'Session',
                secondsLeft: 25 * 60,
                timerRunning: false,
            }
        case SWITCH_BREAK:
            console.log('switch')
            return {
                ...state,
                interval: 'Break',
                secondsLeft: state.breakLength * 60
            }
        case SWITCH_SESSION:
            console.log('switch')
            return {
                ...state,
                interval: 'Session',
                secondsLeft: state.sessionLength * 60
            }
        case DEC_SECONDS:
            return {
                ...state,
                secondsLeft: state.secondsLeft - 1
            }
        default:
            return state;
    }
}

export default rootReducer;
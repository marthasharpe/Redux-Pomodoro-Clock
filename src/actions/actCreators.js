import {
    INC_BREAK,
    DEC_BREAK,
    INC_SESSION,
    DEC_SESSION,
    START_TIMER,
    STOP_TIMER,
    RESET_TIMER
} from './actTypes';

export const incBreak = () => ({
        type: INC_BREAK
    })

export const decBreak = () => ({
        type: DEC_BREAK
    })

export const incSession = () => ({
        type: INC_SESSION
    })

export const decSession = () => ({
        type: DEC_SESSION
    })

export const startTime = () => (
    {
        type: START_TIMER
    })

export const stopTime = () => ({
        type: STOP_TIMER
    })

export const resetTime = () => ({
        type: RESET_TIMER
    })
export const INC_BREAK = 'INC_BREAK';
export const DEC_BREAK = 'DEC_BREAK';
export const INC_SESSION = 'INC_SESSION';
export const DEC_SESSION = 'DEC_SESSION';
export const START_TIMER = 'START_TIMER';
export const STOP_TIMER = 'STOP_TIMER';
export const RESET_TIMER = 'RESET_TIMER';
export const SWITCH_INTERVAL = 'SWITCH_INTERVAL';

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

export const startTimer = () => (
    {
        type: START_TIMER
    })

export const stopTimer = () => ({
        type: STOP_TIMER
    })

export const resetTimer = () => ({
        type: RESET_TIMER
    })

export const handleSwitch = () => ({
        type: SWITCH_INTERVAL
    })
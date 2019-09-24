import { INC_BREAK, DEC_BREAK } from './actTypes';

export const incBreak = () => {
    return {
        type: INC_BREAK
    }
}

export const decBreak = () => {
    return {
        type: DEC_BREAK
    }
}
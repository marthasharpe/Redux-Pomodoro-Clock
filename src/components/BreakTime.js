import React from 'react';
import { connect } from 'react-redux';
import { incBreak, decBreak } from '../actions/actCreators';

const BreakTime = ({ breakLength, handleBreakInc, handleBreakDec}) => {
    return (
        <div>
            <button className='btn' onClick={handleBreakInc}>+</button>
            <div>{breakLength}</div>
            <button className='btn' onClick={handleBreakDec}>-</button>
        </div>
    )
}

const mapStateToProps = ({ breakLength }) => ({
    breakLength
})

const mapDispatchToProps = {
    handleBreakInc: incBreak,
    handleBreakDec: decBreak,
}

export default connect(mapStateToProps, mapDispatchToProps)(BreakTime)
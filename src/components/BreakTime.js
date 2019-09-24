import React from 'react';
import './BreakTime.css';
import { connect } from 'react-redux';
import { incBreak, decBreak } from '../actions/actCreators';

const BreakTime = ({ breakLength, handleBreakInc, handleBreakDec}) => {
    return (
        <div className='breaktime-container'>
            <h2 id='break-label'>Break Time</h2>
            <div className='button-container'>
                <button
                    className='button-child'
                    id='break-increment'
                    onClick={handleBreakInc}
                >
                +
                </button>
                
                <h3
                    className='button-child'
                    id='break-length'
                >
                {breakLength}
                </h3>
                
                <button
                    className='button-child'
                    id='break-decrement'
                    onClick={handleBreakDec}
                >
                -
                </button>
            </div>
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
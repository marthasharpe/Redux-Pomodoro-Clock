import React from 'react';
import './BreakTime.css';
import { connect } from 'react-redux';
import { incBreak, decBreak } from '../actions/actCreators';

const BreakTime = ({ timerRunning, breakLength, incBreak, decBreak}) => {    
    return (
        <div className='breaktime-container'>
            <h2 id='break-label'>Break Length</h2>
            <div className='button-container'>
                <button
                    className='button-child'
                    id='break-increment'
                    onClick={timerRunning === false && breakLength < 60 ? incBreak : null}
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
                    onClick={timerRunning === false && breakLength > 1 ? decBreak : null}
                >
                -
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = ({ breakLength, timerRunning }) => ({
    breakLength,
    timerRunning
})

const mapDispatchToProps = {
    incBreak,
    decBreak,
}

export default connect(mapStateToProps, mapDispatchToProps)(BreakTime)
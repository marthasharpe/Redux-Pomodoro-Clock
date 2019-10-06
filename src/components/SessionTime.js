import React from 'react';
import './SessionTime.css';
import { connect } from 'react-redux';
import { incSession, decSession } from '../actions/actCreators';

const SessionTime = ({ timerRunning, sessionLength, incSession, decSession}) => {
    return (
        <div className='sessiontime-container'>
            <h2 id='session-label'>Session Length</h2>
            <div className='button-container'>
                <button
                    className='button-child'
                    id='session-increment'
                    onClick={timerRunning === false && sessionLength < 60 ? incSession : null}
                >
                +
                </button>
                
                <h3
                    className='button-child'
                    id='session-length'
                >
                {sessionLength}
                </h3>
                
                <button
                    className='button-child'
                    id='session-decrement'
                    onClick={timerRunning === false && sessionLength > 1 ? decSession : null}
                >
                -
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = ({ sessionLength, timerRunning }) => ({
    sessionLength,
    timerRunning
})

const mapDispatchToProps = {
    incSession,
    decSession
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionTime)
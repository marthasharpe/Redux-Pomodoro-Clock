import React from 'react';
import './SessionTime.css';
import { connect } from 'react-redux';
import { incSession, decSession } from '../actions/actCreators';

const SessionTime = ({ sessionLength, handleSessionInc, handleSessionDec}) => {
    return (
        <div className='sessiontime-container'>
            <h2 id='session-label'>Work Time</h2>
            <div className='button-container'>
                <button
                    className='button-child'
                    id='session-increment'
                    onClick={handleSessionInc}
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
                    onClick={handleSessionDec}
                >
                -
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = ({ sessionLength }) => ({
    sessionLength
})

const mapDispatchToProps = {
    handleSessionInc: incSession,
    handleSessionDec: decSession,
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionTime)
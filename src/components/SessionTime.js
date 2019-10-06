import React from 'react';
import './SessionTime.css';
import { connect } from 'react-redux';
import { incSession, decSession } from '../actions/actCreators';

const SessionTime = ({ sessionLength, incSession, decSession}) => {
    return (
        <div className='sessiontime-container'>
            <h2 id='session-label'>Session Length</h2>
            <div className='button-container'>
                <button
                    className='button-child'
                    id='session-increment'
                    onClick={incSession}
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
                    onClick={decSession}
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
    incSession,
    decSession
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionTime)